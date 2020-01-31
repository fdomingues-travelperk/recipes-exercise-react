import { useEffect, useReducer } from "react";

function useLocalStorageReducer(key, defaultValue, reducer) {
  const [state, dispatch] = useReducer(reducer, defaultValue, () => {
    try {
      return JSON.parse(window.localStorage.getItem(key) || JSON.stringify(defaultValue))
    } catch (e) {
      return defaultValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state]);

  return [state, dispatch];
}

export default useLocalStorageReducer;