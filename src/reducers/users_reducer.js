function usersReducer(state = {
  name: 'Kevin',
  restaurants: []
}, action) {
  console.log(action);

  switch(action.type) {

    default:
      return state;
  }
}
export default usersReducer;
