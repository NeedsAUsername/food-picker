export function login(form) {
  return (dispatch) => {
    dispatch({type: 'LOADING_LOG_IN'});
    console.log('logging in');
    console.log(form);
  }
}
