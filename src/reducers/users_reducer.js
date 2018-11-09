function usersReducer(state = {
  name: 'Kevin',
  restaurantIds: ['kBZggrnSP1kcUMnsnfkTaQ'], // This is saved to user db.
  restaurants: [] // This is fetched on page load, not saved to db.
}, action) {
  console.log(action);

  switch(action.type) {

    case 'ADD_RESTAURANT':
      if (state.restaurantIds.find(rest => rest === action.payload)){
        return state;
      } else {
        return {
          ...state,
          restaurantIds: [...state.restaurantIds, action.payload]
        }
      }

    case 'FETCH_RESTAURANT_BY_ID':
      return {
        ...state,
        restaurants: [...state.restaurants, action.payload]
      }

    default:
      return state;
  }
}
export default usersReducer;
