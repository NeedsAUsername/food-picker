The Plan:

1) User inputs for choosing what kind of food they want(lunch/dinner/cuisine/price/ratings, etc.)
2) Fetch yelp api to display restaurants in their area (zip code input) according to above.
3) Have a page that chooses a random restaurant near them.
4) Have a history page with the restaurants they've chosen. Allow like/dislike/link to yelp page.

Todo:
fix actions.

don't fetch user if local-storage is empty.

take out the fetch action on every page.  
have one fetch in app.js that gets the user data and adds it to redux state so we don't keep fetching on every page load.

Fix case where restaurant Id is invalid, and app breaks upon fetch.
