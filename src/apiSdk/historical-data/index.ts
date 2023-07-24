import axios from 'axios';
import queryString from 'query-string';
import { HistoricalDataInterface, HistoricalDataGetQueryInterface } from 'interfaces/historical-data';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getHistoricalData = async (
  query?: HistoricalDataGetQueryInterface,
): Promise<PaginatedInterface<HistoricalDataInterface>> => {
  const response = await axios.get('/api/historical-data', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createHistoricalData = async (historicalData: HistoricalDataInterface) => {
  const response = await axios.post('/api/historical-data', historicalData);
  return response.data;
};

export const updateHistoricalDataById = async (id: string, historicalData: HistoricalDataInterface) => {
  const response = await axios.put(`/api/historical-data/${id}`, historicalData);
  return response.data;
};

export const getHistoricalDataById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/historical-data/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteHistoricalDataById = async (id: string) => {
  const response = await axios.delete(`/api/historical-data/${id}`);
  return response.data;
};
