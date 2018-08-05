const ordersReducer = (state = [], action) => {
  console.log(action, 'inside orders reducer');
  switch (action.type){
    case 'ADD_PIZZA' :
      return [...state, action.payload];
    case 'ADD_DRINK' :
      return [...state, action.payload];
    case 'REMOVE_ALL' :
      return [...state].filter((item, i) => item !== action.payload[i]);
    case 'REMOVE_ITEM' :
      return [...state].filter((item, i) => i !== action.payload);
    default : return state
  }
};

export default ordersReducer