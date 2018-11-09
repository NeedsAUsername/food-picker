export function addRestaurant(restaurantId) {
  return (dispatch) => {
    dispatch({
      type: 'ADD_RESTAURANT',
      payload: restaurantId
    })
  }
}
