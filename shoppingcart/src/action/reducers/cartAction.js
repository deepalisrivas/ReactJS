import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_QUANTITY,
  SUBTRACT_QUANTITY,
  DISPLAY_ITEM,
  DISPLAY_MODEL_IN_CART,
  RESET_CART,
} from "../actionTypes";
export const addToCart = (itemA) => {
  return {
    type: ADD_TO_CART,
    itemA,
  };
};
export const removeFromCart = (item) => {
  return {
    type: REMOVE_FROM_CART,
    // id : {id,subId},
    item,
    // subId,
  };
};
export const addQuantity = (item) => {
  return {
    type: ADD_QUANTITY,
    item,
  };
};
export const subtractQuantity = (item) => {
  return {
    type: SUBTRACT_QUANTITY,
    item,
  };
};
export const displayItem = (id) => {
  return {
    type: DISPLAY_ITEM,
    id,
  };
};
export const displayModelInCart = (item) => {
  return {
    type: DISPLAY_MODEL_IN_CART,
    item,
  };
};
export const resetCart = () => {
  return {
    type: RESET_CART,
  };
};
