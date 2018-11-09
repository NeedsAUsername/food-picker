export function emptyRestaurants() {
  return (dispatch) => {
    dispatch({
      type: 'EMPTY_RESTAURANTS'
    })
  }
}
