import {useState, useEffect} from 'react';

interface DataFetchResult {
  data: any;
  isLoading: boolean;
  error: Error | null;
}

const useDataFetch = <T,>(url: string): DataFetchResult => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network error');
        }
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {data, isLoading, error};
};

export default useDataFetch;
