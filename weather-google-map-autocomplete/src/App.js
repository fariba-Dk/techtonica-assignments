import React from 'react';
import GoogleMap from './components/GoogleMap.js';
import Weather from './components/Weather';
import AutoComplete from 'places-autocomplete-react';
export default function App() {
  return (
    <>
      <div id='top'>
        <GoogleMap />
      </div>
      <AutoComplete
        placesKey='AIzaSyB1fByA0ZCLSYpzyNAlcVJTwIEUNDYuaIE'
        inputId='address'
        setAddress={(addressObject) => console.log(addressObject)}
        required={true}
      />
      <div id='buttom'>
        <Weather />
      </div>
    </>
  );
}
