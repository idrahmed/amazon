export const initialState = {
  basket: [],
  user: null,
};

// Selector

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state, // always have this
        basket: [...state.basket, action.item],
      };
    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: []
      }
    case "REMOVE_FROM_BASKET":
      // returns the first match
      const index = state.basket.findIndex(
        // does any basket item id match action id?
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
        // going to the index position of the basket then cutting it by 1
      } else {
        console.warn(
          `Can't remove product (id : ${action.id}) as it is not in basket`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
      case "SET_USER": 
      return {
        ...state, 
        user: action.user
      }
    default:
      return state;
  }
};

export default reducer;
