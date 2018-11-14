// async functions will always return a promise
export async function checkUser() {
  const url = `${process.env.REACT_APP_RAILS_API}/users/current`;
  const options = {
    headers: {
      'X-User-Email': localStorage.getItem('email'),
      'X-User-Token': localStorage.getItem('token')
    }
  }
  let current_user;
  // js will wait for fetch to finish, allowing us to assign a value to current_user
  await fetch(url, options)
  .then(response => response.json())
  .then(json => {
    // json will contain user attributes if found, otherwise null
    current_user = json;
  })
  // current_user will be returned as a promise.
  return current_user;
}
