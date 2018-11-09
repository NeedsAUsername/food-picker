function usersReducer(state = {
  name: 'Kevin',
  restaurants: [] //Array of Restaurant Ids
}, action) {
  console.log(action);

  switch(action.type) {

    case 'ADD_RESTAURANT':
      if (state.restaurants.find(rest => rest === action.payload)){
        return state;
      } else {
        return {
          ...state,
          restaurants: [...state.restaurants, action.payload]
        }
      }


    default:
      return state;
  }
}
export default usersReducer;
