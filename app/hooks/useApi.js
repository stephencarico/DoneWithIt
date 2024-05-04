import { useState } from "react";

export default useApi = (apiFunc) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    return setData(response.data);
  }

  return { data, loading, error, request };
}