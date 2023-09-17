import { useEffect, useState } from 'react';

function useOnClickOutside(ref, handler) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    function handleClickOutside(event) {
      if (isMounted && ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      setIsMounted(false);

      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handler, isMounted]);
}

export default useOnClickOutside;
