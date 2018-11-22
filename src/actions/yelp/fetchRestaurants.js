// example params: 'zipcode=11354&price=2'

export function fetchRestaurants(params) {
  return (dispatch) => {
    dispatch({type: 'LOADING_RESTAURANTS'})
    const url = `${process.env.REACT_APP_PROXY}/https://api.yelp.com/v3/businesses/search?${params}`;
    const options = {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
      }
    }
    return fetch(url, options)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: 'FETCH_RESTAURANTS',
        payload: data.businesses
      })
    })
    .catch(error => console.log(error))
  }
}
