import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
  const { alpha2Code, alpha3Code, name } = country;
  const flagUrl = `https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`;

  return (
    <div key={alpha3Code}>
      <img src={flagUrl} alt={name.common} />
      <br />
      <Link to={`/${alpha3Code}`}>{name.common}</Link>
    </div>
  );
};

export default CountryCard;
