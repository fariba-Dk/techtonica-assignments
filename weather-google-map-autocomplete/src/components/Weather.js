
import React from 'react';

export default function Weather() {

  //ALL THE HOOKS
  // const [temp, setTemp]= useState('');
  // const [city, setCity] = useState('')
  return (
    <div>
      <div className="weather">
      <h1>Welcome</h1>
        <input placeholder='city name'></input>
        <input placeholder='temp'></input>
        <input placeholder='wind speed'></input>
        <input placeholder='humidity'></input>
      </div>
    </div>
  );
}
