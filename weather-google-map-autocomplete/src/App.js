import React, { useState, useCallback } from 'react';
import Weather from './components/Weather.js';
import Pin from './components/Pin';
import AutoComplete from 'places-autocomplete-react';
import "./index.css"


export default function App() {
  const [address, setAddress] = useState({});
  //when component is loads

  const correct = useCallback(
    (strAddress) => {
      console.log(strAddress);
      //make the api call to weather api with strformatted address
      //make a temp set usestate set that tem to the result o fthe api and then pass the state to the werather comp and display it there
      setAddress(strAddress.formattedAddress);
    },
    [setAddress]
  );
  return (
    <>
      <div className="App">
        <div className="weatherContainer p3-3 pb-3">
          <Weather day={'Mon'} temp={32}/>
          <Weather day={'Tue'}  temp={33}/>
          <Weather day={'Wed'} temp={32}/>
          <Weather day={'Thu'} temp={35}/>
          <Weather day={'Fri'} temp={15}/>
          <Weather day={'Sat'} temp={30}/>
          <Weather day={'Sun'} temp={34} />

        </div>

        <Weather className="weather"/>
      </div>
      <div>
        <Pin />
      </div>
    </>
  );
}
