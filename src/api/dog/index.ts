import { AxiosRequestConfig } from 'axios'

export const dogListApi: AxiosRequestConfig = {
  url: 'breeds/list/all',
  method: 'GET',
};