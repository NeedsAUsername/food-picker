function yelpReducer(state = {
  restaurants: [{
    id: 1,
    name: 'testName'
  }]
}, action) {
  console.log(action);

  switch(action.type) {

    default:
      return state;
  }
}
export default yelpReducer;
