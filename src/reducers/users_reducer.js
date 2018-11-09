function usersReducer(state = {
  name: 'Kevin',
  restaurantIds: ['kBZggrnSP1kcUMnsnfkTaQ'], // This is saved to user db.
  restaurants: [], // This is fetched on page load, not saved to db.
  loading: false
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
    case 'LOADING_YOUR_RESTAURANTS':
      return {
        ...state,
        loading: true
      }

    case 'FETCH_RESTAURANT_BY_ID':
      if (state.restaurants.find(rest => rest.id === action.payload.id)) {
        return {
          ...state,
          loading: false
        }
      } else {
        return {
          ...state,
          restaurants: [...state.restaurants, action.payload],
          loading: false
        }
      }

    default:
      return state;
  }
}
export default usersReducer;
