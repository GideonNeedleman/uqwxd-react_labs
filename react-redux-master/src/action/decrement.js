const decrement = (val) => {
  return {
      type : 'DECREMENT',
      inc : val
  }
}

export default decrement;