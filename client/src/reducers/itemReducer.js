import { itemTypes } from "../actions/types";

const initialState = {
  items: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case itemTypes.GET_ITEMS:
      return {
        ...state,
        items: action.payload.data,
        loading: false
      };
    case itemTypes.DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload.id)
      };
    case itemTypes.ADD_ITEM:
      return {
        ...state,
        items: [action.payload.newItem, ...state.items]
      };
    case itemTypes.ITEMS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
