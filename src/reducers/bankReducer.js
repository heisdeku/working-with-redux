export const bankReducer = (state, action) => {  
  switch(action.type) {
    case 'WITHDRAW_MONEY':
      return {
        ...state,
        totalAmount: action.amount
      }
    default:
      return state;
  }
}