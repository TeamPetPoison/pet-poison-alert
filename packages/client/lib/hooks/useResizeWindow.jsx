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
    window.onresize = () => {
      // debounce the resize event to prevent too many re-renders
      clearTimeout(timer);
      timer = setTimeout(() => {
        const innerHeight = window.innerHeight;
        setWindowDimensions({
          width: window.innerWidth,
          height: innerHeight,
        });

        // set css variable for mobile browsers
        let vh = innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      }, 100);
    };
    // cleanup listener
    return () => {
      window.onresize = null;
    };
  }, [setWindowDimensions]);
};
