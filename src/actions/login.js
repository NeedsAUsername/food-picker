export function login(form) {
  return (dispatch) => {
    dispatch({type: 'LOGGING_IN'});
    console.log('logging in');
    console.log(form);
  }
}
