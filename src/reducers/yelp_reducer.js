function yelpReducer(state = {
  restaurants: [{
    name: 'testName',
    location: 'testLocation'
  }]
}, action) {
  console.log(action);

  switch(action.type) {

    default:
      return state;
  }
}
export default yelpReducer;
