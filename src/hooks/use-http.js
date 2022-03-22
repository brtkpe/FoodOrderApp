import { useState } from "react";
import axios from "axios";

export default function useHttp(url, apply) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const sendRequest = async () => {
    try {
      const res = await axios.get(url);
      const data = res.data;

      apply(data);
      setIsLoading(false);
      
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  };

  return { sendRequest, isLoading, error };
}
