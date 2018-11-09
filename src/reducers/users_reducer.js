function usersReducer(state = {
  name: 'Kevin',
  restaurants: []
}, action) {
  console.log(action);

  switch(action.type) {

    case 'ADD_RESTAURANT':
      return {
        ...state, 
        restaurants: [...state.restaurants, action.payload]
      }
    default:
      return state;
  }
}
export default usersReducer;
