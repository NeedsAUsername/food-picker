export function logout(){
  return (dispatch) => {
    dispatch({
      type: 'LOADING_LOG_OUT'
    })
    const url = `${process.env.REACT_APP_RAILS_API}/sessions`;
    const options = {
      method: 'DELETE',
      accepts: 'application/json',
      headers: {
        'Content-Type': 'application/json',
        'X-User-Email': localStorage.getItem('email'),
        'X-User-Token': localStorage.getItem('token')
      }
    }
    fetch(url, options)
    .then(response => response.json())
    .then(json => {
      debugger
      dispatch({
        type: 'LOG_OUT',
        payload: json
      })
    })
    .catch(error => console.log(error))
  }


}
