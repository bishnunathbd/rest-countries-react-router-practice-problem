import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const url = 'https://restcountries.eu/rest/v2/all';
    fetch(url)
    .then(res => res.json())
    .then(data => {
      const first10 = data.slice(0, 10);
      setCountries(first10);
    })
  }, [])

  return (
    <div>
      <h2>Total Countries: {countries.length}</h2>
      {
        countries.map(country => <Country country={country}></Country>)
      }
    </div>
  );
};

export default Home;