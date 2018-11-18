function yelpReducer(state = {
  loading: false,
  restaurants: [],
  noResults: false
}, action) {
  console.log(action);

  switch(action.type) {
    case 'LOADING_RESTAURANTS':
      return {...state, loading: true};

    case 'FETCH_RESTAURANTS':
      if (action.payload == "") {
        return {
          restaurants: [],
          noResults: true,
          loading: false
        }
      } else {
        return {
          ...state,
          loading: false,
          noResults: false,
          restaurants: action.payload
        }
      }

    case 'EMPTY_RESTAURANTS':
      return {
        ...state,
        restaurants: [],
        noResults: false
      }

    default:
      return state;
  }
}
export default yelpReducer;
