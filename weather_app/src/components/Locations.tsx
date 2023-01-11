import { FC } from 'react';
import { WeatherLocation } from '../model/Weather';
import styled from 'styled-components';

interface LocationsProps {
  locations: WeatherLocation[];
  onSelect: (location: WeatherLocation) => void;
}

export const Locations: FC<LocationsProps> = ({locations, onSelect}) => {
  
  return (
    <Wrapper>
      {locations.length > 0 && <h2>Locations</h2>}
      <ul>
          {locations.map((location, index) => 
            <li key={index} 
                onClick={() => onSelect(location)}
                >
              {location.name}
            </li>
          )}
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  li {
    border-bottom: 1px solid #c0c0c0;
    width: 200px;
    padding: 5px 10px;

    &:hover {
      background-color: var(--secondary-background-color);
    }
  }
`