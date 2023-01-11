import { FC, useState } from 'react';

interface LocationSearchProps {
  onSearch: (search: string) => void;
}

export const LocationSearch: FC<LocationSearchProps> = ({onSearch}) => {
  const [locationSearch, setLocationSearch] = useState<string>('');
  const addLocation = (): void => {
    onSearch(locationSearch)
    setLocationSearch('')
  }
  return (
    <div>
        <label>Add Location:
          <input type="text" 
                 value={locationSearch} 
                 onChange={e => setLocationSearch(e.target.value)}
                 />
        </label>
        <button onClick={addLocation} 
                disabled={locationSearch.trim() === '' ? true : false}
                >
          Search
        </button>
      </div>
  )
}