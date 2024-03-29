/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import useSWR, { mutate } from 'swr';

const fetcher = (url: string) => axios.get(url).then(res => res.data)

export const useLeaderBoard = () => {
    const { data, error, isLoading } = useSWR('/api/user/getallusers', fetcher,{
        refreshInterval: 30000, 
      });

    return {
        leadData: error || !data ? [] : data,
        isLoading,
    };
};




