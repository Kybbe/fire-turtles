
//detta skickas in till MenuItem.
const inititalState = {
  menu: [
    
      {
        "id": 1,
        "title": "Bryggkaffe",
        "desc": "Bryggd på månadens bönor.",
        "price": 39
      },
      {
        "id": 2,
        "title": "Caffè Doppio",
        "desc": "Bryggd på månadens bönor.",
        "price": 49
      },
      {
        "id": 3,
        "title": "Cappuccino",
        "desc": "Bryggd på månadens bönor.",
        "price": 49
      },
      {
        "id": 4,
        "title": "Latte Macchiato",
        "desc": "Bryggd på månadens bönor.",
        "price": 49
      },
      {
        "id": 5,
        "title": "Kaffe Latte",
        "desc": "Bryggd på månadens bönor.",
        "price": 54
      },
      {
        "id": 6,
        "title": "Cortado",
        "desc": "Bryggd på månadens bönor.",
        "price": 39
      },
      {
        "id": 7,
        "title": "Gustav Adolfsbakelse",
        "desc": "Gjord på månadens mjöl.",
        "price": 39
      }
    
  ],
  cart: [],
  orderNr: 0,
  ETA: 0,
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
    default:
      return state
  }
}



export default MenuReducer;