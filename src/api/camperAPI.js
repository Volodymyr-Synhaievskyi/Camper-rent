import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export const getDataAPI = async (params) => {
  const { data } = await axios('/vehicle', {
    params,
  });

  if (data.length === 0) {
    throw new Error('No data found');
  }

  return data;
};
