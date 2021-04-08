import { ADD_TODO, COMPLETED_TODO, REMOVE_TODO } from "../Actions/ActionType";

const initialState = {
  Ids: [],
  IdObjects: {},
};

const TodoAppReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        Ids: [...state.Ids, id],
        IdObjects: {
          ...state.IdObjects,
          [id]: {
            content,
            completed: false,
          },
        },
      };
    }
    case COMPLETED_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        IdObjects: {
          ...state.IdObjects,
          [id]: {
            ...state.IdObjects[id],
            completed: !state.IdObjects[id].completed,
          },
        },
      };
    }
    case REMOVE_TODO: {
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

export default TodoAppReducer;
