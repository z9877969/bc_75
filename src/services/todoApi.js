import axios from 'axios';

const todoApi = axios.create({
  baseURL: 'https://node-js-dgoy.onrender.com/api',
});

const setToken = (token) =>
  (todoApi.defaults.headers.common.Authorization = `Bearer ${token}`);

export const getTodoApi = async () => {
  const { data } = await todoApi.get('/todo');

  return data;
};

export const addTodoApi = async (formData) => {
  const { data } = await todoApi.post('/todo', formData);

  return data;
  // throw new Error('some error');
};

export const removeTodoApi = async (id) => {
  const { data } = await todoApi.delete(`todo/${id}`);

  return data;
};

export const updateTodoStatusApi = async (id, isDone) => {
  const { data } = await todoApi.patch(`/todo/${id}/status`, { isDone });

  return data;
};

export const updateTodoDataApi = async (id, formData) => {
  const { data } = await todoApi.put(`todo/${id}`, formData);

  return data;
};

// === Auth endpoints
export const registerUserApi = async (formData) => {
  const { data } = await todoApi.post('/auth/register', formData);
  return data;
};

export const loginUserApi = async (formData) => {
  const { data } = await todoApi.post('/auth/login', formData);
  setToken(data.token);
  return data;
};

export const getCurUserApi = async (token) => {
  setToken(token);
  const { data } = await todoApi.get('/auth/current');
  return data;
};
