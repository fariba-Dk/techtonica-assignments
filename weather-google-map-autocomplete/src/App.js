import React from 'react';
import {
  GoogleMap,
  useJsApiLoader,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api'; //comes with a hook= useLoadScript

// autoupdate
import usePlacesAutoComplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import snazzy from './snazzy';
//define data:
const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
const center = {
  lat: 37.773972,
  lng: -122.431297,
};
const options = {
  styles: snazzy,
  disableDefaultUi: true,
  zoomControl: true,
};
export default function App() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries, //avoids too many re-renders
  });
  //markers
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null)

  const onMapClick = React.useCallback((event) => {
    setMarkers((current) => [
      ...current,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      },
    ]);
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return 'ERROR LOADING MAPS!';
  if (!isLoaded) return 'Loading maps...';

  return (
    <div>
      <h1 className='h1'>
        <span role='img' aria-label='clouds'>
          🌦 🌤 Check Your Weather Here 🌤 🌦
        </span>
      </h1>
      <i src='public/weather-img.png' rel='logo'></i>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={14}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map((marker)=>{
          <Marker
          position={{lat:marker.lat, lng: marker.lng }}
            icon={{
              url:"public/Marker.png",
              scaledSize: new.window.google.maps.Size(30,30),
              origin: new window.google.maps.Points(0,0),
              anchor: new window.google.maps.Points(15,15),
              }}
              onClick={()=>
              {
                setSelected(marker)
              }}
          />
        })}
        {selected ? (<InfoWindow>
          <div>
            <h2>You are here!</h2>
          </div>
        </InfoWindow>) :null}
      </GoogleMap>
    </div>
  );
}

function Search() {}
