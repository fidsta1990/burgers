const reducer = (state, action) => {
  //add item
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;

    const exisitingCartItemIdx = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const exisitingCartItem = state.items[exisitingCartItemIdx];
    let updatedItems;

    //if already part of cart items array do this
    if (exisitingCartItem) {
      const updatedItem = {
        ...exisitingCartItem,
        amount: exisitingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[exisitingCartItemIdx] = updatedItem;
    } else {
      //if not already part of cart items array do this
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  //add item
  if (action.type === "REMOVE") {
    const exisitingCartItemIdx = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[exisitingCartItemIdx];

    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;
    //if amount is equal to 1, remove entire item from array
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      //otherwise decrease the amount in array for that specific item
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[exisitingCartItemIdx] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "CLEAR") {
    return { ...state, items: [] };
  }

  return state;
};

export default reducer;
