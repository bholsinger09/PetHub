import Axios from 'axios'


let accessToken = ''
let authPost = {
  grant_type: 'client_credentials',
  client_id: "BxUzZmpE2nprZFeiDDF5vEbMDrqL06iyt8H65KJ9tcvYJ1PGLr", // your id here
  client_secret: "sKfZWP0RljEz67orr6P7htInmdvMcZ8or0LXt4Qq" // your token here
}

let api = Axios.create({
  baseURL: 'https://api.petfinder.com/v2/',
  headers: {
    Authorization: "Bearer " + accessToken
  }
})

let authenticate = Axios.create({
  baseURL: 'https://api.petfinder.com/v2/oauth2/token'
})

async function login() {
  try {
    let creds = await authenticate.post('', authPost)
    return creds.data.access_token
  }
  catch (e) {
    console.error(e)
    return
  }

}


export default class PetApiService {
  async getAnimals() {
    try {
      if (api.defaults.headers.Authorization == "Bearer ") {
        accessToken = await login()
        api.defaults.headers.Authorization += accessToken
      }
      let queries = '?type=Dog'
      let res = await api.get('animals' + queries)
      return res.data.animals
    }
    catch (e) {
      if (e.status) {
        await login()
      }
    }
  }
}