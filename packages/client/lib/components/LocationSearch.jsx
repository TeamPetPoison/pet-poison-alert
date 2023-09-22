import { useRef, useState } from 'react';
import { useMainStoreActions } from '../../store/store';
import useOnClickOutside from '../hooks/useOnClickOutside';
import { SVGIcon } from './common/icons/SVGIcon';

const getSearchLocationData = async (searchText) => {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
    searchText,
  )}&format=json`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.map((result) => ({
      lat: parseFloat(result.lat),
      lng: parseFloat(result.lon),
      name: result.display_name,
    }));
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

const LocationSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');
  const [results, setResults] = useState([]);
  const searchRef = useRef(null);
  const { setGeoData } = useMainStoreActions();

  let debounceTimerRef = useRef(null);

  function handleInputChange(event) {
    const value = event.target.value;
    setValue(value);
    clearTimeout(debounceTimerRef.current);
    debounceTimerRef.current = setTimeout(async () => {
      const searchResult = await getSearchLocationData(value);
      setResults(searchResult.slice(0, 5));
      setIsOpen(searchResult.length > 0);
    }, 500);
  }

  const handleClearInput = () => {
    setValue('');
    setResults([]);
    setIsOpen(false);
  };

  const handleListItemClick = (name, lat, lng) => {
    console.log('Clicked on item:', name, lat, lng);
    setValue(name);
    setIsOpen(false);
    setGeoData({ lat, lng });
  };

  const hideSearch = () => {
    setIsOpen(false);
  };

  useOnClickOutside(searchRef, hideSearch);

  const handleToggleSearch = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      ref={searchRef}
      className="bg-background text-foreground fixed left-6 right-6 top-8 z-[9999] rounded-2xl"
    >
      <div className="relative">
        <div className="flex items-center justify-between gap-x-4 rounded-lg px-5 py-3">
          <button onClick={handleToggleSearch}>
            {isOpen ? (
              <SVGIcon name="xMarkIcon" />
            ) : (
              <SVGIcon name="magnifyingGlassIcon" />
            )}
          </button>

          <input
            className="placeholder:text-foreground/30 w-full rounded-lg pl-2"
            type="text"
            placeholder="Search For Place, Location"
            value={value}
            onChange={handleInputChange}
          />
          {value && (
            <button onClick={handleClearInput}>
              <SVGIcon name="xMarkIcon" />
            </button>
          )}
        </div>

        {isOpen && (
          <div className="bg-background border-border absolute left-0 right-0 top-14 rounded-b-lg border border-solid">
            <ul className="list-none p-0">
              {results.map((item) => (
                <li
                  key={item.name}
                  className="hover:bg-selected cursor-pointer px-5 py-2"
                  onClick={() =>
                    handleListItemClick(item.name, item.lat, item.lng)
                  }
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationSearch;
