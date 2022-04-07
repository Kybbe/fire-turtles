
//detta skickas in till MenuItem.
const inititalState = {
  menu: [],
  cart: [],
  orderNr: 0,
  ETA: 0,
  hasStartedETATimer: false,
  ETATimerDone: false,
  user: 0,
  hasOrdered: false
}

const MenuReducer = (state = inititalState, action) => {
  switch(action.type) {
    //remove after testing
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1
      }
    //send in entire menu
    case 'ADD_MENU':
      return {
        ...state,
        menu: action.payload
      }
    //lägger till helt ny cart i state 
    case 'ADD_CART': 
      return{
        ...state,
        cart: action.payload
      }
    //send name and price, and if its in the cart its quantity gets increased
    case 'ADD_TO_CART':
      let newCart = [...state.cart];
      let found = false;
      for (let i = 0; i < newCart.length; i++) {
        if (newCart[i].name === action.payload.name) {
          newCart[i].quantity++;
          found = true;
        }
      }
      if (!found) {
        newCart.push({name: action.payload.name, price: action.payload.price, quantity: 1});
      }

      return {
        ...state,
        cart: newCart
      }
    //send name
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        // if the item is in the cart, decrease the quantity
        // if the item quantity is 1, remove the item from the cart
        cart: state.cart.map(item => {
          if (item.name === action.payload) {
            if (item.quantity === 1) {
              return null;
            } else {
              return {
                ...item,
                quantity: item.quantity - 1
              }
            }
          } else {
            return item
          }
        }).filter(item => item !== null)
      }
    case 'DELETE_CART':
      return {
        ...state,
        cart: []
      }
    //send orderNr and eta
    case 'SET_ORDER_NR&ETA':
      return {
        ...state,
        orderNr: action.payload.orderNr,
        ETA: action.payload.eta
      }
    case 'ADD_USER':
      return {
        ...state,
        user: action.payload
      }
    case 'SET_HAS_ORDERED':
      return {
        ...state,
        hasOrdered: true
      }
    case 'DECREMENT_ETA':
      return {
        ...state,
        ETA: state.ETA - 1
      }
    case 'SET_HAS_STARTED_ETA_TIMER':
      return {
        ...state,
        hasStartedETATimer: action.payload
      }
    case 'SET_ETATIMER_DONE':
      return {
        ...state,
        ETATimerDone: action.payload
      }
    default:
      return state
  }
}



export default MenuReducer;