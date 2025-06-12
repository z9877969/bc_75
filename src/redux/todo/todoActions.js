import { createAction } from '@reduxjs/toolkit';

export const addTodoAction = createAction('todo/add');
export const removeTodoAction = createAction('todo/remove');
export const updateTodoStatusAction = createAction('todo/update/status');

export const changeTodoFilterAction = createAction('todo/change/filter');
