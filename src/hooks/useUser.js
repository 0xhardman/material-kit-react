import { useState, useEffect } from 'react';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import tokenParser from '../utils/tokenParser';

export default function useUser(token) {
  const [user, setUser] = useState();
  const [error, setError] = useState();

  function decode(token) {
    try {
      const data = jwt_decode(token);
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
