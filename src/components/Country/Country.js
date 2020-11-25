import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Country = (props) => {
  // console.log(props.country);
  const { name, flag, alpha3Code } = props.country;

  let history = useHistory();

  const handleClick = (code) => {
    history.push(`/country/${code}`);
  }

  const countryStyle = {
    border: '1px solid purple',
    borderRadius: '20px',
    margin: '20px',
    padding: '20px'
  }
  return (
    <div style={countryStyle}>
      <h2>Country Name: {name}</h2>
      <img style={{ height: '80px' }} src={flag} alt="" />
      <p>Details of <Link to={`/country/${alpha3Code}`}>{name}</Link></p>
      <button onClick={() => handleClick(alpha3Code)}>More Info</button>
    </div>
  );
};

export default Country;