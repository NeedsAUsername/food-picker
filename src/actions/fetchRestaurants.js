// example params: 'zipcode=11354&price=2'

export function fetchRestaurants(params) {
  return (dispatch) => {
    dispatch({type: 'LOADING_RESTAURANTS'})
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?${params}`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
      }
    })
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: 'FETCH_RESTAURANTS',
        payload: data.businesses.slice(0, 10)
      })
    })
    .catch(error => console.log(error))
  }
}
