const addMenu = (data) => {
  return {
    type: 'ADD_MENU',
    payload: data
  }
}

//skickar in helt ny cart till reducer.
const addCart = (data) => {
  return{
    type: 'ADD_CART',
    payload: data
  }
}

const addToCart = (data) => {
  return {
    type: 'ADD_TO_CART',
    payload: data
  }
}

const removeFromCart = (data) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: data
  }
}

const setOrderNrAndETA = (data) => {
  return {
    type: 'SET_ORDER_NR&ETA',
    payload: data
  }
}

const deleteCart = () => {
  return {
    type: 'DELETE_CART'
  }
}

export { addMenu, addToCart, deleteCart, removeFromCart, setOrderNrAndETA, addCart }