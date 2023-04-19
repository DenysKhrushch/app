import axios from 'axios';

axios.defaults.baseURL =
  'https://643f1d473dee5b763e161e41.mockapi.io/denyskhrushch/api';
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';

export const getTodos = () => axios('/todos').then((response) => response.data);

export const toggleTodo = (id: string, completed: boolean) =>
  axios
    .put(`/todos/${id}`, {
      completed: !completed,
    })
    .then((response) => response.data);

export const addTodo = (title: string) =>
  axios
    .post(`/todos`, {
      title,
      completed: false,
    })
    .then((response) => response.data);

export const deleteTodo = (id: string) =>
  axios.delete(`/todos/${id}`).then((response) => response.data);
