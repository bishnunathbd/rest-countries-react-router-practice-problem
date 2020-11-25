import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
  const { code } = useParams();

  const [country, setCountry] = useState({});

  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/alpha/${code}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setCountry(data))
  }, [])

  const countryStyle = {
    border: '1px solid gray',
    borderRadius: '20px',
    margin: '50px',
    padding: '20px'
  }
  return (
    <div style={countryStyle}>
      <img style={{ height: '50px' }} src={country.flag} alt="" />
      <p><strong>Name: </strong>{country.name}</p>
      <p><strong>Capital: </strong>{country.capital}</p>
      <p><strong>Population: </strong>{country.population}</p>
      <p><strong>Area: </strong>{country.area}</p>
      <p><strong>Region: </strong>{country.region}</p>
    </div>
  );
};

export default CountryDetail;