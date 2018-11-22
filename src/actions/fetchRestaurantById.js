export function fetchRestaurantById(id) {
  debugger
  return (dispatch) => {
    dispatch({
      type: 'LOADING_YOUR_RESTAURANTS'
    })
    return fetch(`${process.env.REACT_APP_PROXY}/https://api.yelp.com/v3/businesses/${id}`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
      }
    })
    .then(response => response.json())
    .then(data =>{
      dispatch({
        type: 'FETCH_RESTAURANT_BY_ID',
        payload: data
      })
    })
  }
}
