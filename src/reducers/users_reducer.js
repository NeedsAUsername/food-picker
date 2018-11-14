function usersReducer(state = {
  name: 'Kevin',
  restaurantIds: ['kBZggrnSP1kcUMnsnfkTaQ'], // This is saved to user db.
  restaurants: [], // This is fetched on page load from yelp, not saved to db.
  logging_in: false
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

    case 'LOADING_LOG_IN':
      console.log('logging in')
      return {
        ...state,
        logging_in: true
      }

    case 'LOG_IN':
      console.log(action.payload)
      if (action.payload.status === 'not_authenticated') {
        alert('user credentials not authenticated');
        return {
          ...state,
          logging_in: false
        }
      } else {
        localStorage.setItem('token', action.payload.authentication_token);
        localStorage.setItem('email', action.payload.email);
        if (localStorage.getItem('token') !== action.payload.authentication_token ||
            localStorage.getItem('email) !== action.payload.email')) {
          alert('Error in setting auth token')
        }
        console.log('logged in')
        return {
          ...state,
          logging_in: false
        }
      }

    default:
      return state;
  }
}
export default usersReducer;
