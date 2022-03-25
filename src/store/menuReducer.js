const inititalState = {
  counter: 0
}

const todoReducer = (state = inititalState, action) => {
  switch(action.type) {
      case 'INCREMENT':
          return {
              ...state,
              counter: state.counter + 1
          }
      default:
          return state
  }
}

export default todoReducer;