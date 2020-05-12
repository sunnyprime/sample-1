// import CartActionTypes from './alert.types';
// import { addItemToCart, removeItemFromCart } from './cart.utils';
import AlertActionTypes from './alert.type'

const INITIAL_STATE = {
  hidden: false,
  type: "error",
  message:"This is a unsucess message"
};

const alertsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case AlertActionTypes.SUCCESS:
      return {hidden:false,type:"success",message:action.payload}
    case AlertActionTypes.INFO:
      return {hidden:false,type:"info",message:action.payload}


    default:
      return state
  }

//   switch (action.type) {
    // case CartActionTypes.TOGGLE_CART_HIDDEN:
    //   return {
    //     ...state,
    //     hidden: !state.hidden
    //   };
    // case CartActionTypes.ADD_ITEM:
    //   return {
    //     ...state,
    //     cartItems: addItemToCart(state.cartItems, action.payload)
    //   };
    // case CartActionTypes.REMOVE_ITEM:
    //   return {
    //     ...state,
    //     cartItems: removeItemFromCart(state.cartItems, action.payload)
    //   };
    // case CartActionTypes.CLEAR_ITEM_FROM_CART:
    //   return {
    //     ...state,
    //     cartItems: state.cartItems.filter(
    //       cartItem => cartItem.id !== action.payload.id
    //     )
    //   };
    // default:
      // return state;
//   }
};

export default alertsReducer;