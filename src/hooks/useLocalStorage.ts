import { useEffect, useState } from 'react';

function getStorageValue(key: string, defaultValue: any) {
  // getting stored value
  const savedValue = localStorage.getItem(key) as string;
  const initialValue = JSON.parse(savedValue);
  return initialValue || defaultValue;
}

export const useLocalStorage = (key: string, defaultValue: any) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
