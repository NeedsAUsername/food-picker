function usersReducer(state = {
  authenticated: false,
  email: '',
  // User db contains restaurant Ids. On site mount, fetches yelp info using those ids and fills this restaurants array with them
  restaurants: [],
  logging_in: false,
  loggin_out: false,
  signing_up: false,
  adding: false,
  deleting: false
}, action) {
  console.log(action);

  // Catch-all for error-handling
  // Rails API will send {status: error_message} if it encounters an error
  // Will raise type error if action.payload.status directly and action.payload is undefined so need to nest the if statements
  if (action.payload) {
    if (action.payload.status) {
      alert(action.payload.status);
      return {
        ...state,
        logging_in: false,
        loggin_out: false,
        signing_up: false,
        adding: false,
        deleting: false
      }
    }
  }

  switch(action.type) {

    case 'LOADING_ADD_RESTAURANT':
      return {...state, adding: true}

    case 'ADD_RESTAURANT':
      if (state.restaurants.find(rest => rest.id === action.payload.id)){
        return state;
      } else {
        return {
          ...state,
          restaurants: [...state.restaurants, action.payload],
          adding: false
        }
      }
    case 'LOADING_DELETE_RESTAURANT':
      return {...state, deleting: true}

    case 'DELETE_RESTAURANT':
      let filteredRestaurants = state.restaurants.filter(rest => rest.id !== action.payload);
      if (action.payload.restaurantIdDeleted) {
        // If user was logged in and a restaurant in db was deleted
        filteredRestaurants = state.restaurants.filter(rest => rest.id !== action.payload.restaurantIdDeleted)
      }
      return {
        ...state,
        restaurants: filteredRestaurants,
        deleting: false
      }

    case 'FETCH_USER':
      if (action.payload) {
        return {
          ...state,
          authenticated: true,
          email: action.payload.email,
        }
      }

    case 'LOADING_USER_RESTAURANT':
      return {
        ...state,
        loading: true
      }
    //Uses restaurant ids from fetch_user to fetch retaurant objects from yelp
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
      return {...state, logging_in: true}

    case 'LOG_IN':
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
      }
      else {
        return {
          ...state,
          email: action.payload.email,
          authenticated: true,
          logging_in: false,
        }
      }

    case 'LOADING_LOG_OUT':
      return {...state, logging_out: true}

    case 'LOG_OUT':
      localStorage.clear();
      return {
        authenticated: false,
        email: '',
        restaurants: [],
        logging_in: false,
        loggin_out: false,
        signing_up: false
      }

    case 'LOADING_SIGN_UP':
      return {...state, signing_up: true}
      
    case 'SIGN_UP':
      alert('Signed Up successfully!');
      return {
        ...state,
        signing_up: false
      }

    default:
      return state;
  }
}
export default usersReducer;
