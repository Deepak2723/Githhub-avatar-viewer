// useDebounce.js
import { useState, useEffect } from 'react';

function useDebounce(callback, delay) {
  const [value, setValue] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      callback(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return (newValue) => {
    setValue(newValue);
  };
}

export default useDebounce;
