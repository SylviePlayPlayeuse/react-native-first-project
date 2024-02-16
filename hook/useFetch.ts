import { useEffect, useState } from 'react';

export const useFetch = (endpoint: string, query: Object) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      ...query,
    },
    headers: {
      'X-RapidAPI-Key': 'dd96053580mshd19c72802313462p107521jsn67a1491bfde4',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
  };

  const dataForNow = () => {
    return [
      {
        job_id: 1,
        employer_logo:
          'https://img.freepik.com/free-vector/cute-panda-with-bamboo_138676-3053.jpg',
        employer_name: 'Panda',
        job_title: 'Panda Caretaker',
        job_location: 'Panda Sanctuary',
        job_description: 'Panda Caretaker',
        job_type: 'Full Time',
        job_salary: '1000',
        job_currency: 'USD',
      },
    ];
  };

  const fetchData = () => {
    setIsLoading(true);

    try {
      setData(dataForNow());
      setIsLoading(false);
    } catch (err) {
      setError(err);
      console.error('there is an error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};