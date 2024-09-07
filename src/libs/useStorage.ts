export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'accessToken',
};

const useStorage = (key: string, initialValue: any) => {
  const getValue = () => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  };

  // const [storedValue, setStoredValue] = useState(getValue(key, initialValue));

  const storeValue = (value: any) => {
    try {
      // setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return { getValue, storeValue };
};

export default useStorage;
