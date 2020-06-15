import api from './api-helper';

// make a functions that will make the api call

export const getAllComments = async () => {
  const resp = await api.get('/comments');
  return resp.data;
}

export const getOneComment = async (id) => {
  const resp = await api.get(`/comments/${id}`);
  return resp.data;
}

export const createComment = async (id, commentData) => {
  let data = { description: commentData }
  console.log(data)
  const resp = await api.post(`/posts/${id}/comments`, { comment: data });
  return resp.data;
}

export const updateComment = async (id, commentData) => {
  const resp = await api.put(`/comments/${id}`, { comment: commentData });
  return resp.data;
}

export const deleteComment = async (id) => {
  const resp = await api.delete(`/comments/${id}`);
  return resp
}