// Template action, to increment counter as a example
const increment = (data) => {
  return {
      type: 'INCREMENT',
      payload: data
  }
} 

export { increment }