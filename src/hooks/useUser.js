import { useState, useEffect } from 'react';
import tokenParser from '../utils/tokenParser';

export default function useUser(token) {
  const [user, setUser] = useState();
  const [error, setError] = useState();

  function decode(token) {
    try {
      const data = tokenParser(token);
      setUser(data);
    } catch (err) {
      setError(err);
    }
  }

  useEffect(() => {
    decode(token);
  }, [token]);

  return [user, error, decode];
}
