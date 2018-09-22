import { itemTypes } from "./types";
import axios from "axios";

export const getItems = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get("/api/items").then(res => {
    dispatch({
      type: itemTypes.GET_ITEMS,
      payload: { data: res.data }
    });
  });
};

export const deleteItem = id => dispatch => {
  axios.delete(`/api/items/${id}`).then(res =>
    dispatch({
      type: itemTypes.DELETE_ITEM,
      payload: { id }
    })
  );
};

export const addItem = newItem => dispatch => {
  axios.post("/api/items", newItem).then(res => {
    dispatch(getItems());
  });
};

export const setItemsLoading = () => {
  return {
    type: itemTypes.ITEMS_LOADING
  };
};
