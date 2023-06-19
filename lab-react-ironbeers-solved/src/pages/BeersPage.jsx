import { useEffect, useState } from 'react'
import beersService from '../services/beers.service'
import { Button, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BeersPage = () => {
  const [beers, setBeers] = useState([])
  const [searchName, setSearchName] = useState('')
  const [shouldFetch, setShouldFetch] = useState(true)

  useEffect(() => {
    if (!shouldFetch) return

    if (searchName !== '') {
      beersService
        .getBeerByQuery(searchName)
        .then(({ data }) => {
          setBeers(data)
        })
        .catch(err => console.log(err))
    } else {
      beersService
        .getAllBeers()
        .then(({ data }) => {
          setBeers(data)
        })
        .catch(err => console.log(err))
    }

    setShouldFetch(false)
  }, [searchName, shouldFetch])

  const handleSearch = e => {
    setSearchName(e.target.value)
  }

  const handleButtonClick = () => {
    setShouldFetch(true)
  }

  return (
    <>
      <Container>
        <Form.Group className='mb-3' controlId='name'>
          <Form.Label>Search for a beer</Form.Label>
          <div className='searchGroup'>
            <Form.Control type='text' value={searchName} onChange={handleSearch} />
            <Button onClick={handleButtonClick}>Search</Button>
          </div>
        </Form.Group>
        {beers.map(eachBeer => (
          <Link to={`/beers/${eachBeer._id}`} key={eachBeer._id}>
            <div className='allBeersCard'>
              <img src={eachBeer.image_url} alt={eachBeer.name} />
              <div className='allBeersCardSideText'>
                <h3>{eachBeer.name}</h3>
                <p>{eachBeer.tagline}</p>
                <p>{eachBeer.contributed_by}</p>
              </div>
            </div>
          </Link>
        ))}
      </Container>
    </>
  )
}

export default BeersPage
