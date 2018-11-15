// Just empties the restaurant state responsible for displaying info, does not affect db
export function emptyRestaurants() {
  return {
      type: 'EMPTY_RESTAURANTS'
  }
}
