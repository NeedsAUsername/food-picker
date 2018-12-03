export function signup(formState) {
  return (dispatch) => {
    dispatch({type: 'LOADING_SIGN_UP'});
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      accepts: 'application/json',
      body: JSON.stringify(formState)
    }
    return fetch(`${process.env.REACT_APP_RAILS_API}/users`, options)
    .then(response => response.json())
    .then(json => {
      dispatch({
        type: 'SIGN_UP',
        payload: json
      })
    })
    .catch(error => {
      dispatch({
        type: 'error',
        payload: {status: error}
      })
    })
  }
}
