import React, { useState, useRef } from 'react';
import {
  MagnifyingGlassCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import axios from 'axios';
import useOnClickOutside from './useOnClickOutside';
import { useLocationContext } from './LocationContext';

const LocationSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState('');
  const [results, setResults] = useState([]);
  const searchRef = useRef(null);
  const { setSelectedLocation } = useLocationContext();

  const getSearchLocationData = async (searchText) => {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
      searchText
    )}&format=json`;

    try {
      const response = await axios.get(url);
      return response.data.map((result) => ({
        lat: parseFloat(result.lat),
        lng: parseFloat(result.lon),
        name: result.display_name,
      }));
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };
  const handleToggleSearch = () => {
    setIsOpen(!isOpen);
  };
  let debounceTimer;
  function handleInputChange(event) {
    const value = event.target.value;
    setValue(value);
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(async () => {
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
    setSelectedLocation({ lat, lng });
  };

  const hideSearch = () => {
    setIsOpen(false);
  };

  useOnClickOutside(searchRef, hideSearch);

  return (
    <div
      ref={searchRef}
      className="fixed top-8 left-6 right-6 z-[9999] bg-background text-foreground rounded-2xl"
    >
      <div className="relative">
        <div className="flex px-5 py-3 justify-between items-center gap-x-4 rounded-lg">
          <button onClick={handleToggleSearch}>
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <MagnifyingGlassCircleIcon className="w-6 h-6" />
            )}
          </button>

          <input
            className="w-full pl-2 placeholder:text-foreground/30 rounded-lg"
            type="text"
            placeholder="Search For Place, Location"
            value={value}
            onChange={handleInputChange}
          />
          {value && (
            <button onClick={handleClearInput}>
              <XMarkIcon className="w-6 h-6" />
            </button>
          )}
        </div>

        {isOpen && (
          <div className="absolute top-14 left-0 right-0 bg-white border border-solid border-white-500 rounded-b-lg">
            <ul className="list-none p-0">
              {results.slice(0, 10).map((item) => (
                <li
                  key={item.name}
                  className="px-5 py-2 hover:bg-selected-10 cursor-pointer"
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
