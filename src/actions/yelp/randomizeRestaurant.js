export function randomizeRestaurant(zip) {
  return (dispatch) => {
    dispatch({type: 'LOADING_RESTAURANTS'})
    const url = `${process.env.REACT_APP_PROXY}/https://api.yelp.com/v3/businesses/search?location=${zip}&limit=50`;
    const options = {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
      }
    }
    return fetch(url, options)
    .then(response => response.json())
    .then(data => {
      const maxNumber = data.businesses.length;
      const random_index = Math.floor(Math.random() * maxNumber);
      dispatch({
        type: 'FETCH_RESTAURANTS',
        payload: [data.businesses[random_index]]
      })
    })
    .catch(error => console.log(error))
  }
}
