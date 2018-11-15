function usersReducer(state = {
  authenticated: false,
  restaurantIds: [], // This is what is grabbed from db
  restaurants: [], // This is fetched on page load from yelp using restaurantIds
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
          authenticated: false,
          logging_in: false
        }
      } else {
        localStorage.setItem('token', action.payload.authentication_token);
        localStorage.setItem('email', action.payload.email);
        if (localStorage.getItem('token') !== action.payload.authentication_token ||
            localStorage.getItem('email) !== action.payload.email')) {
          alert('Error in setting auth token');
          return {
            ...state,
            authenticated: false,
            logging_in: false
          }
        } else {
          console.log('logged in')
          return {
            ...state,
            authenticated: true,
            logging_in: false,
          }
        }
      }

    case 'FETCH_USER':
      // Syncs the user from RAILS API with our redux store
      // If credentials are invalid, payload will be null
      if (action.payload) {
        const restaurantIds = action.payload.restaurants.map(rest => rest.yelpNumber);
        return {
          ...state,
          authenticated: true,
          restaurantIds: restaurantIds 
        }
      } else {
        console.log('not logged in')
        return {
          ...state,
          authenticated: false
        };
      }

    case 'EMPTY_RESTAURANTS':
      return {
        ...state,
        restaurants: []
      }

    default:
      return state;
  }
}
export default usersReducer;
