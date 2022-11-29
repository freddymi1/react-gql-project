import axios from "axios"

const validateToken = () => {
  const currentUser = sessionStorage.getItem('currentUser');
  if(currentUser) {
    const authData = Object.assign({}, JSON.parse(currentUser).authData)
    console.log(authData)
    axios({
      method: 'get',
      headers: Object.assign({}, authData.authData),
      url: "http://82.165.206.170/auth/validate_token",
    })
    .then((response) => {
      console.log(response)
    })
  }
}

export { validateToken }