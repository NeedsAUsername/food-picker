export function checkUser() {
  const url = `${process.env.REACT_APP_RAILS_API}/users/current`;
  const options = {
    headers: {
      'X-User-Email': localStorage.getItem('email'),
      'X-User-Token': localStorage.getItem('token')
    }
  }
  return fetch(url, options)
  .then(response => response.json())
  .then(json => console.log(json))
}
