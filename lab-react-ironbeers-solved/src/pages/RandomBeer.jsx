import { useEffect } from 'react'
import { useState } from 'react'
import BeerCard from '../components/BeerCard/BeerCard'
import beersService from '../services/beers.service'

const RandomBeer = () => {
  const [randomBeer, setRandomBeer] = useState({})

  useEffect(() => {
    beersService
      .getRandomBeer()
      .then(({ data }) => setRandomBeer(data))
      .catch(err => console.log(err))
  }, [])

  return <BeerCard beerDetail={randomBeer} />
}

export default RandomBeer
