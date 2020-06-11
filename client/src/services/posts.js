import api from './api-helper';

// make a functions that will make the api call

export const getAllPosts = async () => {
  const resp = await api.get('/posts');
  return resp.data;
}

export const getOnePost = async (id) => {
  const resp = await api.get(`/posts/${id}`);
  return resp.data;
}

export const createPost = async (postData) => {
  const resp = await api.post('/posts', { post: postData });
  return resp.data;
}

export const updatePost = async (id, postData) => {
  const resp = await api.put(`/foods/${id}`, { post: postData });
  return resp.data;
}

export const deleteComment = async (id) => {
  const resp = await api.delete(`/comments/${id}`);
  return resp
}