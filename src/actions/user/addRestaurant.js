export function addRestaurant(restaurant) {

  if (!!localStorage.email & !!localStorage.token) {
    return (dispatch) => {
      dispatch({
        type: 'LOADING_ADD_RESTAURANT'
      })
      const url = `${process.env.REACT_APP_RAILS_API}/restaurants`;
      const options = {
        method: 'POST',
        accepts: 'application/json',
        headers: {
          'Content-Type': 'application/json',
          'X-User-Email': localStorage.getItem('email'),
          'X-User-Token': localStorage.getItem('token')
        },
        body: JSON.stringify({restaurantId: restaurant.id})
      }
      return fetch(url, options)
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: 'ADD_RESTAURANT',
          payload: restaurant
        })
      })
    }
  }
  else {
    return {
        type: 'ADD_RESTAURANT',
        payload: restaurant
    }
  }
}
