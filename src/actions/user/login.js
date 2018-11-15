export function login(formState) {
  return (dispatch) => {
    dispatch({type: 'LOADING_LOG_IN'});
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      accepts: 'application/json',
      body: JSON.stringify(formState)
    }
    return fetch(`${process.env.REACT_APP_RAILS_API}/sessions`, options)
    .then(response => response.json())
    .then(json => {
      dispatch({
        type: 'LOG_IN',
        payload: json
      })
    })
    .catch(error => console.log(error))
  }
}
