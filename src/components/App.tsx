import { FC, useState } from 'react';
import { LocationSearch } from './LocationSearch';
import { Locations } from './Locations'
import { WeatherLocation } from '../model/Weather';
import { searchLocation } from '../weatherServices/WeatherService';
import { WeatherSummary } from './WeatherSummary';

export const App: FC = () => {
  const [locations, setLocations] = useState<WeatherLocation[]>([]);
  const [error, setError] = useState('');
  const [currentLocation, setCurrentLocation] = useState<WeatherLocation | null>(null);

  const addLocation = async (term: string) => {
    setError('');
    const location = await searchLocation(term);
    if(!location) {
      setError(`No location called ${term} found`)
    } else if(locations.find(item => item.id === location.id)) {
      setError(`Location ${term} is alreadt in the list`)
    } else {
      setLocations([location, ...locations])
    }
  }

  return (
    <div>
      <h1>Weather App</h1>
      <LocationSearch onSearch={addLocation}/>
      {error ? <div>{error}</div> : null}
      <Locations locations={locations}
                 onSelect={location => setCurrentLocation(location)}
                 />
      <WeatherSummary location={currentLocation}/>
    </div>
  );
}
