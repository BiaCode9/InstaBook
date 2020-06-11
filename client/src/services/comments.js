import api from './api-helper';

// make a function that will make the api call
// have one route for posts?

export const getAllComments = async () => {
  const resp = await api.get('/comments');
  return resp.data;
}