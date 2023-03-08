import { FC } from 'react';
import { Weather } from '../model/Weather';
import styled from 'styled-components';

interface WeatherDataProps {
  weather: Weather;
  display: boolean;
  location: string;
}

const convertDate = (unixUtc: number): string => {
  const date = new Date(unixUtc * 1000);
  return date.toLocaleTimeString([], {timeStyle: 'short'});
}

const getIconUrl = (code: string): string => {
  return `https://openweathermap.org/img/wn/${code}.png`
}

const convertToUppecase = (text: string): string => {
  return text.replace(text[0], text[0].toUpperCase())
}

export const WeatherData: FC<WeatherDataProps> = ({weather, display, location}) => {
  return (
    <Wrapper>
      <div>
        {display && <h2>{location}</h2> }
        <p>{convertDate(weather.dt)}</p>
        {weather.weather.map(condition => 
          <div key={condition.id}>
            <img src={getIconUrl(condition.icon)} alt={condition.description} />
            <p>{convertToUppecase(condition.description)}</p>
          </div>
        )}
      </div>
      <div>
        <p>{Math.round(weather.main.temp)}°C</p>
        {display && <p>L: {Math.round(weather.main.temp_min)}°C | H: {Math.round(weather.main.temp_max)}°C</p>}
        <p>Humidity: {weather.main.humidity}%</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  background-color: var(--primary-background-color);
  color: var(--secondary-color);
  padding: 10px 10px 7px;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  h2 {
    font-size: 25px;
    padding-bottom: 15px;
  }

  p {
    margin-bottom: 3px;
  }
`