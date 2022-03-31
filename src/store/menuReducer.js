const inititalState = {
  menu: [],
  cart: [],
  orderNr: 0,
  ETA: 0,
}

const todoReducer = (state = inititalState, action) => {
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
    //send name and price, and if its in the cart its quantity gets increased
    case 'ADD_TO_CART':
      return {
        ...state,
        // each item in cart is an object with a name and a quantity
        // if the item is already in the cart, increase the quantity
        // if the item is not in the cart, add it to the cart with 1 quantity
        cart: state.cart.map(item => {
          if (item.name === action.payload.name) {
            return {
              ...item,
              quantity: item.quantity + 1
            }
          } else {
            return item
          }
        }
        ).concat({
          name: action.payload.name,
          price: action.payload.price,
          quantity: 1
        })
      }
    //send name
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        // if the item is in the cart, decrease the quantity
        // if the item quantity is 1, remove the item from the cart
        cart: state.cart.map(item => {
          if (item.name === action.payload.name) {
            if (item.quantity === 1) {
              return null
            } else {
              return {
                ...item,
                quantity: item.quantity - 1
              }
            }
          } else {
            return item
          }
        })
      }
    case 'DELETE CART':
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
    default:
      return state
  }
}

export default todoReducer;