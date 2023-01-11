import { FC, useEffect, useState } from "react";
import { Weather, WeatherLocation } from "../model/Weather";
import { getForecast, getWeatherData } from "../weatherServices/WeatherService";
import { WeatherData } from "./WeatherData";
import styled from "styled-components";

interface WeatherSummaryProps {
  location: WeatherLocation | null;
}

export const WeatherSummary: FC<WeatherSummaryProps> = ({location}) => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [forecast, setForecast] = useState<Weather[] | null>(null);

  const setWeatherData = async() => {
    if(location) {
      const [weather, forecast] = await Promise.all([
        getWeatherData(location.id),
        getForecast(location.id)
      ]);
      setWeather(weather);
      setForecast(forecast);
    }
  }

  useEffect(() => {
    setWeatherData();
  }, [location]);

  return location && weather && forecast && (
    <Wrapper>
      <div>
        <WeatherData weather={weather} display={true} location={location.name}/>
      </div>
      <ul>
        {forecast?.map(timePoint =>
          <li key={timePoint.dt}>
            <WeatherData weather={timePoint} display={false} location={location.name}/>
          </li>  
        )}
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 25px;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: stretch;
    gap: 1px;
    border-top: 1px solid white;

    @media screen and (max-width: 525px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 385px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`