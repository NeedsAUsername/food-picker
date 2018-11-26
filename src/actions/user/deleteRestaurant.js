export function deleteRestaurant(restaurantId) {

  if (!!localStorage.email & !!localStorage.token) {
    return (dispatch) => {
      dispatch({
        type: 'LOADING_DELETE_RESTAURANT'
      })
      const url = `${process.env.REACT_APP_RAILS_API}/restaurants`;
      const options = {
        method: 'DELETE',
        accepts: 'application/json',
        headers: {
          'Content-Type': 'application/json',
          'X-User-Email': localStorage.getItem('email'),
          'X-User-Token': localStorage.getItem('token')
        },
        body: JSON.stringify({restaurantId: restaurantId})
      }
      fetch(url, options)
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: 'DELETE_RESTAURANT',
          payload: json
        })
      })
      .catch(error => console.log(error))
    }
  }
  else {
    return {
        type: 'DELETE_RESTAURANT',
        payload: restaurantId
    }
  }
}
