import axios, { AxiosRequestConfig } from 'axios'
import { toast } from 'react-toastify';

export const buildUrl = (...paths: string[]) =>
    `https://simple-blog-backend-rriy.onrender.com/api/${paths.join('/')}`;

export const sendRequest = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  try {
    const response = await axios(url, config);
    return response.data as T;
  } catch (error) {
   toast.error('Неверный запрос, проверьте введенные данные');
    console.error('Error during request:', error);
    throw error; 
  }
};
    
