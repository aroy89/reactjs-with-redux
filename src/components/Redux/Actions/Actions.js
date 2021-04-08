import {
  ADD_TODO,
  COMPLETED_TODO,
  REMOVE_TODO,
  ADD_CART,
  REMOVE_CART,
} from "./ActionType";

let count = 0;

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    id: ++count,
    content,
  },
});

export const completedTodo = (id) => ({
  type: COMPLETED_TODO,
  payload: { id },
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});

export const addToCart = (id) => ({
  type: ADD_CART,
  payload: { id },
});

export const removeCart = (id) => ({
  type: REMOVE_CART,
  payload: { id },
});
