export function addRestaurant(restaurantId) {
  return {
      type: 'ADD_RESTAURANT',
      payload: restaurantId
  }
}
