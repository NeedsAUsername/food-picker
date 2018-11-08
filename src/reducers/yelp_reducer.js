function yelpReducer(state = {
  loading: false,
  restaurants: []
}, action) {
  console.log(action);

  switch(action.type) {
    case 'LOADING_RESTAURANTS':
      console.log('loading restaurants');
      return {...state, loading: true};

    case 'FETCH_RESTAURANTS':
      console.log('fetching restaurants');
      return {
        loading: false,
        restaurants: action.payload
      }
    default:
      return state;
  }
}
export default yelpReducer;
