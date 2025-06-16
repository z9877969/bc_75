import axios from 'axios';

const todoApi = axios.create({
  baseURL: 'https://684f0d7cf0c9c9848d29f4dc.mockapi.io/api',
});

export const addTodoApi = async (formData) => {
  const { data } = await todoApi.post('/todo', formData);

  return data;
};

export const getTodoApi = async () => {
  const { data } = await todoApi.get('/todo');

  return data;
};

export const removeTodoApi = async (id) => {
  const { data } = await todoApi.delete(`todo/${id}`);

  return data;
};

export const updateTodoStatusApi = async (id, isDone) => {
  const { data } = await todoApi.put(`todo/${id}`, { isDone });

  return data;
};
