function usersReducer(state = {
  authenticated: false,
  email: '',
  restaurantIds: [], // This is what is grabbed from db / saved to state
  restaurants: [], // This is fetched on page load from yelp using restaurantIds
  logging_in: false,
  loggin_out: false,
  signing_up: false
}, action) {
  console.log(action);

  switch(action.type) {

    case 'ADD_RESTAURANT':
      if (state.restaurantIds.find(rest => rest === action.payload)){
        return state;
      } else {
        return {
          ...state,
          restaurants: [...state.restaurants, action.payload]
        }
      }

    case 'DELETE_RESTAURANT':
      const filteredRestaurants = state.restaurantIds.filter(id => id !== action.payload);
      return {
        ...state,
        restaurantIds: filteredRestaurants
      }

    case 'DELETE_RESTAURANT_AND_DISPLAY':
      const filteredRestaurantIds = state.restaurantIds.filter(id => id !== action.payload);
      const filteredRestaurantsDisplay = state.restaurants.filter(rest => rest.id !== action.payload);
      return {
        ...state,
        restaurantIds: filteredRestaurantIds,
        restaurants: filteredRestaurantsDisplay
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
            logging_in: false,
          }
        } else {
          console.log('logged in')
          return {
            ...state,
            email: action.payload.email,
            authenticated: true,
            logging_in: false,
          }
        }
      }

    case 'LOADING_LOG_OUT':
      return {
        ...state,
        logging_out: true
      }

    case 'LOG_OUT':
      localStorage.clear();
      return {
        authenticated: false,
        email: '',
        restaurantIds: [],
        restaurants: [],
        logging_in: false,
        loggin_out: false,
        signing_up: false
      }

    case 'LOADING_SIGN_UP':
      console.log('logging in')
      return {
        ...state,
        signing_up: true
      }

    case 'SIGN_UP':
      if (action.payload.status === 'Error') {
        alert('Error signing up. Make sure to input valid email and password');
      } else if (action.payload.status === 'Email taken') {
        alert('Email is taken');
      } else {
        alert('Signed Up successfully!');
      }
      return {
        ...state,
        signing_up: false
      }

    case 'FETCH_USER':
      // Syncs the user from RAILS API with our redux store
      // If credentials are invalid, payload will be null
      if (action.payload) {
        const restaurantIds = action.payload.restaurants.map(rest => rest.yelpNumber);
        return {
          ...state,
          authenticated: true,
          email: action.payload.email,
          restaurantIds: restaurantIds
        }
      } else {
        console.log('not logged in')
        return {
          ...state,
          authenticated: false
        };
      }

    default:
      return state;
  }
}
export default usersReducer;
