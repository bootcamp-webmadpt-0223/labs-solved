import axios from 'axios'

class IronbeersService {
  constructor() {
    this.axios = axios.create({ baseURL: 'https://ih-beers-api2.herokuapp.com/beers' })
  }

  getAllBeers = () => {
    return this.axios.get('/')
  }

  getSingleBeer = id => {
    return this.axios.get(`/${id}`)
  }

  getRandomBeer = () => {
    return this.axios.get('/random')
  }

  getBeerByQuery = query => {
    return this.axios.get(`/search?q=${query}`)
  }

  postNewBeer = beer => {
    return this.axios.post('/new', beer)
  }
}

const ironbeersService = new IronbeersService()
export default ironbeersService
