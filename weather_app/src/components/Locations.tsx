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
    padding: 5px 10px;
    width: 200px;

    &:hover {
      background-color: var(--secondary-background-color);
    }
  }
`