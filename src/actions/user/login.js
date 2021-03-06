export function login(formState) {
  return (dispatch) => {
    dispatch({
      type: 'LOADING_LOG_IN'
    });
    const url = `${process.env.REACT_APP_RAILS_API}/sessions`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      accepts: 'application/json',
      body: JSON.stringify(formState)
    }
    return fetch(url, options)
    .then(response => response.json())
    .then(json => {
      dispatch({
        type: 'LOG_IN',
        payload: json
      })
      if (json.restaurants && json.restaurants.length > 0) {
          json.restaurants.forEach(rest => fetchRestaurantById(rest.yelpNumber, dispatch))
      }
    })
    .catch(error => {
      dispatch({
        type: 'error',
        payload: {status: error}
      })
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
  .catch(error => alert(error))
}
