function yelpReducer(state = {
  loading: false,
  restaurants: []
}, action) {
  console.log(action);

  switch(action.type) {
    case 'LOADING_RESTAURANTS':
      return {...state, loading: true};

    case 'FETCH_RESTAURANTS':
      return {
        loading: false,
        restaurants: action.payload
      }
    default:
      return state;
  }
}
export default yelpReducer;
