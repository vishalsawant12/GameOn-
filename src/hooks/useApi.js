// src/hooks/useApi.js
import { useEffect, useState } from "react";

export const useApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      let response = await fetch(url);
      let allData = await response.json();
      setData(allData);
    } catch (err) {
      setError(err.message || "Some error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error };
};
