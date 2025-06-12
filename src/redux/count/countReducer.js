const inititalState = 0;

const countReducer = (state = inititalState, action) => {
  switch (action.type) {
    case 'increment':
      return state + action.payload;
    case 'decrement':
      return state - action.payload;
    case 'reset':
      return inititalState;

    default:
      return state;
  }
};

export default countReducer;
