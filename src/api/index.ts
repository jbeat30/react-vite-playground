import { AxiosRequestConfig } from 'axios'

export const postListApi: AxiosRequestConfig = {
  method: 'GET',
  url: 'posts',
};

export const postDetailApi = (postId: string): AxiosRequestConfig => ({
  method: 'GET',
  url: `posts/${postId}`,
})