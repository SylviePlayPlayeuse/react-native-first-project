import { useState } from 'react';
import reactData from '@/data/reactData.json';
import contractorData from '@/data/contractor.json';
import fullTimeData from '@/data/fullTime.json';
import partTimeData from '@/data/partTime.json';

export const useFetch = (endpoint?: string, query?: Object) => {
  const [data] = useState(reactData);
  const [isLoading] = useState(false);
  const [error] = useState(null);

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

  const getJobById = (id: string) => {
    return reactData.filter((job) => job.job_id === id);
  };

  const getByJobType = (type: string) => {
    switch (type) {
      case 'contractor':
        return contractorData;
      case 'full-time':
        return fullTimeData;
      case 'part-time':
        return partTimeData;
      default:
        return reactData;
    }
  };

  return { data, isLoading, error, getJobById, getByJobType };
};
