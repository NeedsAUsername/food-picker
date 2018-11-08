export function fetchRestaurants(params) {
  return (dispatch) => {
    dispatch({type: 'Loading_Restaurants'});
    const url = 'https://api.yelp.com/v3/businesses/search?' + params;
    const options = {
      method: 'GET',
      headers: {
        Authorization: process.env.REACT_APP_YELP_API_KEY
      }
    };
    return fetch(url, options)
    .then(response => response.json())
    .then(data => console.log(data))
  };
}
