function usersReducer(state = {
  authenticated: false,
  email: '',
  restaurantIds: [], // This is what is grabbed from rails db
  restaurants: [], // This is fetched from yelp using restaurantIds
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

    case 'DELETE_RESTAURANT':
      const filteredRestaurants = state.restaurants.filter(rest => rest.id !== action.payload);
      return {
        ...state,
        restaurants: filteredRestaurants
      }

    case 'LOADING_YOUR_RESTAURANTS':
      return {
        ...state,
        loading: true
      }

    case 'FETCH_USER':
      if (action.payload) {
        const restaurantIds = action.payload.restaurants.map(rest => rest.yelpNumber);
        return {
          ...state,
          authenticated: true,
          email: action.payload.email,
          restaurantIds: restaurantIds
        }
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
          restaurantIds: [],
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
        const restaurantIds = action.payload.restaurants.map(rest => rest.yelpNumber);
        return {
          ...state,
          email: action.payload.email,
          restaurantIds: restaurantIds,
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
        restaurantIds: [],
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
