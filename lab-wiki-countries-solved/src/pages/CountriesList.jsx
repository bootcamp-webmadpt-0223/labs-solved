import CountryCard from '../components/CountryCard';

const CountriesList = ({ countries }) => {
  return (
    <div>
      <h3>List of countries</h3>
      <div>
        {countries.map((country) => (
          <CountryCard country={country} key={country.name.official} />
        ))}
      </div>
    </div>
  );
};

export default CountriesList;
