import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import BeerCard from '../components/BeerCard/BeerCard'
import beersService from '../services/beers.service'

const BeerDetails = () => {
  const { beerId } = useParams()
  const [beerDetail, setBeerDetail] = useState({})

  useEffect(() => {
    beersService.getSingleBeer(beerId).then(({ data }) => setBeerDetail(data))
  }, [beerId])

  return <BeerCard beerDetail={beerDetail} />
}

export default BeerDetails
