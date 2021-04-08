import { ADD_CART, REMOVE_CART } from "../Actions/ActionType";

const initialState = {
  Ids: [],
};

const OnlineShopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART: {
      const { id } = action.payload;
      return {
        ...state,
        Ids: [...state.Ids, id],
      };
    }
    case REMOVE_CART: {
      const { id } = action.payload;
      let IdArray = state.Ids;
      const UpdatedItems = IdArray.filter((item) => item !== id);
      return {
        ...state,
        Ids: [...UpdatedItems],
      };
    }
    default:
      return state;
  }
};

export default OnlineShopReducer;
