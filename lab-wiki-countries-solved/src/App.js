import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import CountriesList from './pages/CountriesList';
import Navbar from './components/Navbar';
import CountryDetails from './pages/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import countriesJson from './countries.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const [countries, setCountries] = useState(countriesJson);

  // In case of API call
  // const getCountries = async () => {
  //   const { data } = await axios.get(
  //     'https://ih-countries-api.herokuapp.com/countries'
  //   );
  //   setCountries(data);
  // };

  // useEffect(() => {
  //   getCountries();
  // }, []);

  return (
    <div className="App">
      <Navbar />
      <Container>
        <Row>
          <Col md={5} style={{ maxHeight: '90vh', overflowY: 'scroll' }}>
            {countries && <CountriesList countries={countries} />}
          </Col>
          <Col md={7}>
            <Routes>
              <Route
                path="/:countryId"
                element={<CountryDetails countries={countries} />}
              />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
