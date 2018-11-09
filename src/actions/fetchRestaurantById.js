export function fetchRestaurantById(id) {
  return (dispatch) => {
    dispatch({
      type: 'LOADING_RESTAURANTS'
    })
    return fetch(`https://api.yelp.com/v3/businesses/?id=${id}`)
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: 'FETCH_RESTAURANT_BY_ID',
        payload: data
      })
    )
  }
}
