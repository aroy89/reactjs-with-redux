import { products } from "../OnlineShop/OnlineShopDummyData";

// Todo App selectors
export const getTodoAppReducerState = (store) => store.TodoAppReducer;

export const getTodoList = (store) =>
  getTodoAppReducerState(store) ? getTodoAppReducerState(store).Ids : [];

export const getTodoById = (store, id) =>
  getTodoAppReducerState(store)
    ? { ...getTodoAppReducerState(store).IdObjects[id], id }
    : {};

export const getTodos = (store) =>
  getTodoList(store).map((id) => getTodoById(store, id));

// OnlineShopping selectors
export const getOnlineShopReducerState = (store) => store.OnlineShopReducer;

export const getOnlineShopList = (store) =>
  getOnlineShopReducerState(store) ? getOnlineShopReducerState(store).Ids : [];

export const getCartById = (id) =>
  products.find((item) => item.productId === id);

export const getCartItems = (store) =>
  getOnlineShopList(store).map((id) => getCartById(id));
