// Reference: https://typeofnan.dev/using-local-storage-in-react-with-your-own-custom-uselocalstorage-hook/

import { useState, useEffect } from 'react';

export const useLocalStorage = (key: string, defaultValue: string) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    const storedValue = localStorage.getItem(key);

    // Since localStorage data are stored as strings, make sure to JSON.parse the data
    const initialValue = storedValue ? JSON.parse(storedValue) : defaultValue;
    setValue(initialValue);
  }, [defaultValue, key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
};
