import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faEarthEurope} />

export default function NavBar(){
    return <nav className='nav'>
        {element}
    <h2>my travel journal</h2>
  </nav>
}