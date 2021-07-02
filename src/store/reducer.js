const reducer = (state, action) => {
  if (action.type === "ADD") {
    
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  // if(action.type === 'REMOVE'){

  // }

  return state;
};

export default reducer;
