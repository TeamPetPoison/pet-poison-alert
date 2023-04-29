import { useState } from 'react';
import { Bars3Icon, MagnifyingGlassCircleIcon, ArrowUturnLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';

const mockSearchLocationData = {
  results: [
    {
      lat: 40.7128,
      lng: -74.006,
      name: 'New York, NY, USA',
    },
    {
      lat: 37.7749,
      lng: -122.4194,
      name: 'San Francisco, CA, USA',
    },
    {
      lat: 34.0522,
      lng: -118.2437,
      name: 'Los Angeles, CA, USA',
    },
    {
      lat: 41.8781,
      lng: -87.6298,
      name: 'Chicago, IL, USA',
    },
  ],
};

function getSearchLocationData(searchText) {
  const results = mockSearchLocationData.results.filter((result) => {
    return result.name.toLowerCase().includes(searchText.toLowerCase());
  });
  return results;
}

function LocationSearch() {
  const [value, setValue] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  function handleInputChange(event) {
    const value = event.target.value;
    setValue(value);
    const searchResults = getSearchLocationData(value);
    setResults(searchResults);
    setIsOpen(searchResults.length > 0);
  }

  function handleClearInput() {
    setValue('');
  }

  function handleToggleSearch() {
    setIsOpen(!isOpen);
  }

  function handleSearch() {
    console.log('search', value);
    setIsOpen(false);
  }

  return (
    <div className="fixed top-8 left-6 right-6 z-[9999] bg-background text-foreground rounded-2xl">
      <div className="relative">
        <div className='flex px-5 py-3 justify-between items-center gap-x-4 border border-solid border-white-500 rounded-lg'>

          {isOpen ? (
            <ArrowUturnLeftIcon className='w-6 h-6' onClick={handleToggleSearch} />
          ) : (
            <Bars3Icon className='w-6 h-6' onClick={handleToggleSearch} />
          )}

          <input
            className="w-full pl-2 placeholder:text-foreground/30 border border-solid border-white-500 rounded-lg"
            type="text"
            placeholder='Search For Place, Location'
            value={value}
            onChange={handleInputChange}
          />

          {value && (
            <XMarkIcon className='w-6 h-6' onClick={handleClearInput} />
          )}

          <MagnifyingGlassCircleIcon className='w-6 h-6' onClick={handleSearch} />
        </div>

        {isOpen && (
          <div className="absolute top-14 left-0 right-0 bg-white border border-solid border-white-500 rounded-b-lg">
            {results.slice(0, 10).map((item) => (
              <div
                key={item.name}
                className="px-5 py-2 hover:bg-purple-200 cursor-pointer"
                onClick={() => {
                  setValue(item.name);
                  handleSearch();
                }}
              >
                {item.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default LocationSearch;
