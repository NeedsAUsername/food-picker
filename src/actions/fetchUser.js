export function fetchUser() {
  return (dispatch) => {
    const url = `https://restaurant-picker-api.herokuapp.com/v1/users/current`;
    const options = {
      headers: {
        'X-User-Email': localStorage.getItem('email'),
        'X-User-Token': localStorage.getItem('token')
      }
    }
    fetch(url, options)
    .then(response => response.json())
    .then(json => {
      // json will contain user attributes if found, otherwise null
      dispatch({
        type: 'FETCH_USER',
        payload: json
      })
    })
  }
}
