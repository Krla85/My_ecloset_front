import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  async signup (newUser) {
    const response = await API.post('/auth/signup', {
      ...newUser
    })
    return response.data
  },
  async login (user) {
    const response = await API.post('/auth/login', {
      ...user
    })
    return response.data
  },
  async getAllClothes () {
    const response = await API.get('/me/clothes', {
      headers: {
        token: localStorage.getItem('token') //eslint-disable-line
      }
    })
    return response.data
  },
  async addCloth (cloth) {
    const response = await API.post('/me/clothes', cloth, {
      headers: {
        token: localStorage.getItem('token') //eslint-disable-line
      }
    })
    return response.data
  },
  async deleteCloth (clothes) {
    clothes.map(async clothId => {
      const response = await API.delete(`/me/clothes/${clothId}`, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      return response.data
    })
  },
  async getClothesByType (types) {
    console.log(types)
    types.map(async type => {
      const response = await API.get(`/me/clothes?cloth_type=${type}`, {
        headers: {
          token: localStorage.getItem('token') //eslint-disable-line
        }
      })
      return response.data
    })
  },
  async getAllLooks () {
    const response = await API.get('/me/looks', {
      headers: {
        token: localStorage.getItem('token') //eslint-disable-line
      }
    })
    return response.data
  }
}
