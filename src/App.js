import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faEarthEurope} />

function App() {
  return (
    <div className="App">
      {element}
    </div>
  );
}

export default App;
