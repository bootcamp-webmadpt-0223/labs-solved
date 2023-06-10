import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

function CountryDetails({ countries }) {
  const [country, setCountry] = useState(null);
  const { countryId } = useParams();

  useEffect(() => {
    const filteredCountry = countries.find(
      (eachCountry) => eachCountry.alpha3Code === countryId
    );
    setCountry(filteredCountry);
  }, [countryId, countries]);

  // In case of API call
  // const getCountry = async () => {
  //   const { data } = await axios.get(
  //     `https://ih-countries-api.herokuapp.com/countries/${countryId}`
  //   );
  //   setCountry(data);
  // };

  // useEffect(() => {
  //   getCountry();
  // }, [countryId]);

  const getBorderCountryName = (borderCode) => {
    return countries.find((country) => country.alpha3Code === borderCode)?.name
      .common;
  };

  if (!country) {
    return '...Thinking...';
  }

  const flagUrl = `https://flagpedia.net/data/flags/h120/${country.alpha2Code.toLowerCase()}.png`;

  return (
    <div>
      <img src={flagUrl} alt={country.name.common} />

      <h1>{country.name.common}</h1>

      <Table>
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{country.capital[0]}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {`${country.area} km`}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul style={{ listStyle: 'none' }}>
                {country.borders.map((border) => {
                  const borderCountryName = getBorderCountryName(border);
                  return (
                    <li key={borderCountryName}>
                      <Link to={`/${border}`}>{borderCountryName}</Link>
                    </li>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default CountryDetails;
