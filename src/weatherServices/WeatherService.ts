import { Weather, WeatherLocation } from "../model/Weather";

const key: string = process.env.REACT_APP_OPEN_WEATHER_API_KEY as string;
if (!key) throw new Error("Invalid Open Weather API Key");
const url = "http://api.openweathermap.org/data/2.5/";

export const searchLocation = async (
  term: string
): Promise<WeatherLocation | undefined> => {
  const result = await fetch(`${url}weather?q=${term}&appid=${key}`);
  if (result.status === 404) throw new Error("Location not found");
  if (result.status !== 200) throw new Error("Failed to read location data");
  return await result.json();
};

export const getWeatherData = async (locationId: number): Promise<Weather> => {
  const currentWeather = await fetch(
    `${url}weather?id=${locationId}&appid=${key}&units=metric`
  );
  if (currentWeather.status !== 200) throw new Error("Invalid location data");
  return await currentWeather.json();
};

export const getForecast = async (locationId: number): Promise<Weather[]> => {
  const forecast = await fetch(
    `${url}forecast?id=${locationId}&appid=${key}&units=metric&cnt=8`
  );
  if (forecast.status !== 200) throw new Error("Failed to read location data");
  const forecastData = await forecast.json();
  return forecastData.list;
};
