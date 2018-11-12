export function login(formState) {
  return (dispatch) => {
    dispatch({type: 'LOADING_LOG_IN'});
    console.log('logging in');
    console.log(formState);
    const options = {
      method: 'POST',
      contentType: 'application/json',
      accepts: 'application/json',
      body: JSON.stringify(formState)
    }
    fetch(`${process.env.REACT_APP_RAILS_API}/user/token`, options)
    .then(response => console.log(response))
  }
}
