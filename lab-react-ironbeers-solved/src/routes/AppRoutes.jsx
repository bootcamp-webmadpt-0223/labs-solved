import { Routes, Route } from 'react-router-dom'
import BeerDetails from '../pages/BeerDetails'
import BeersPage from '../pages/BeersPage'
import HomePage from '../pages/HomePage'
import NewBeerForm from '../pages/NewBeerForm'
import RandomBeer from '../pages/RandomBeer'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/beers' element={<BeersPage />} />
      <Route path='/beers/:beerId' element={<BeerDetails />} />
      <Route path='/random-beer' element={<RandomBeer />} />
      <Route path='/new-beer' element={<NewBeerForm />} />
    </Routes>
  )
}

export default AppRoutes
