//ToDo: Use redux here. Make sure to not fetch is user is not logged in.

export function deleteRestaurant(restaurantId) {
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
  .then(json => console.log(json))

  return {
      type: 'DELETE_RESTAURANT',
      payload: restaurantId
  }
}
