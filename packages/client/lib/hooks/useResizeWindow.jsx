import { useEffect } from 'react';
import { useMainStoreActions } from '../../store/store';

/**
 * This hook is used to observe the `window` object.
 * and update the window dimensions in the store.
 */
export const useResizeWindow = () => {
  const { setWindowDimensions } = useMainStoreActions();

  useEffect(() => {
    let timer = null;

    const updateWindowDimensions = () => {
      const innerHeight = window.innerHeight;
      setWindowDimensions({
        height: innerHeight,
        width: window.innerWidth,
      });

      // set css variable for mobile browsers
      let vh = innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    // initial call on mount
    updateWindowDimensions();

    // update on window resize event
    window.onresize = () => {
      // debounce the resize event to prevent too many re-renders
      clearTimeout(timer);
      timer = setTimeout(() => {
        updateWindowDimensions();
      }, 16);
    };
    // cleanup listener
    return () => {
      window.onresize = null;
    };
  }, [setWindowDimensions]);
};
