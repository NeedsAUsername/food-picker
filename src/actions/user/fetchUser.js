export function fetchUser() {
  return (dispatch) => {
    const url = `${process.env.REACT_APP_RAILS_API}/users/current`;
    const options = {
      headers: {
        'X-User-Email': localStorage.getItem('email'),
        'X-User-Token': localStorage.getItem('token')
      }
    }
    fetch(url, options)
    .then(response => response.json())
    .then(json => {
      dispatch({
        type: 'FETCH_USER',
        payload: json
      })
      if (json.restaurants) {
        if (json.restaurants.length > 0) {
          json.restaurants.forEach(rest => fetchRestaurantById(rest.yelpNumber, dispatch))  
        }
      }
    })
  }
}

function fetchRestaurantById(id, dispatch) {
  dispatch({
    type: 'LOADING_USER_RESTAURANT'
  })
  fetch(`${process.env.REACT_APP_PROXY}/https://api.yelp.com/v3/businesses/${id}`, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`
    }
  })
  .then(response => response.json())
  .then(data => {
    // If Yelp cannot find it, it will return an error
    if (data.error) {
      alert(data.error.description + 'Id: ' + id);
    } else {
      dispatch({
        type: 'FETCH_RESTAURANT_BY_ID',
        payload: data,
      })
    }
  })
}
