import React, { useState,useRef } from 'react';
import { Bars3Icon, MagnifyingGlassCircleIcon, ArrowUturnLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';
import useOnClickOutside from './useOnClickOutside';


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

function SearchBar() {
  const [isOpen, setIsOpen] = useState(true);
  const [value, setValue] = useState('');
  const [results, setResults] = useState([]);
  const searchRef= useRef(null);


  function handleToggleSearch() {
    setIsOpen(!isOpen);
  }

  function getSearchLocationData(searchText) {
    const results = mockSearchLocationData.results.filter((result) => {
      return result.name.toLowerCase().includes(searchText.toLowerCase());
    });
    return results;
  }

  function handleInputChange(event) {
    const value = event.target.value;
    setValue(value);
    if(value===""){
      setIsOpen(false);
      setResults([]);
    }
    else{
    const searchResults = getSearchLocationData(value);
    setResults(searchResults);
    setIsOpen(searchResults.length > 0);
  }
    
  }

  function handleClearInput() {
    setValue('');
    setResults([]);
    setIsOpen(false);
    
  }

  function handleListItemClick(name) {
    setValue(name);
    setIsOpen(false);
    
  }

  function hideSearch() {
    setIsOpen(false);
  }

useOnClickOutside(searchRef,hideSearch);

  return (
    <div className="fixed top-8 left-6 right-6 z-[9999] bg-background text-foreground rounded-2xl">
      <div className="relative">
        <div className='flex px-5 py-3 justify-between items-center gap-x-4 border border-solid border-white-500 rounded-lg'>
          <button onClick={handleToggleSearch}>
            {isOpen ? (
              <ArrowUturnLeftIcon className='w-6 h-6'/>
            ) : (
              <Bars3Icon className='w-6 h-6'/>
            )}
          </button>
   
          <input
            ref={searchRef}
            className="w-full pl-2 placeholder:text-foreground/30 border border-solid border-white-500 rounded-lg"
            type="text"
            placeholder='Search For Place, Location'
            value={value}
            onChange={handleInputChange}
          />
          <button 
          onClick={handleClearInput}>
            {value && (
              <MagnifyingGlassCircleIcon className='w-6 h-6' />
            )}
             <XMarkIcon className='w-6 h-6' />
            
          </button>
        </div>
   
        {isOpen && (
          <div className="absolute top-14 left-0 right-0 bg-white border border-solid border-white-500 rounded-b-lg">
            <ul className='list-none p-0'>
              {results.slice(0, 10).map((item) => (
                <li
                  key={item.name}
                  className="px-5 py-2 hover:bg-selected-10 cursor-pointer"
                  onClick={() => handleListItemClick(item.name)}
                >
                  <button className='w-full h-full text-left'>  {item.name} </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;



