import React from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api'; //comes with a hook= useLoadScript

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from '@reach/combobox';

// import { formatRelative } from 'date-fns';
import '@reach/combobox/styles.css';

//define data:
const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '50vh',
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const center = {
  lat: 37.773972,
  lng: -122.431297,
};

export default function Map() {
  let cc=console.log
  const { isLoaded, loadError } = useLoadScript({
    libraries, //avoids too many re-renders
  });
  cc(libraries[0])
  //HOOK - markers
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);


  //HOOK - useCallback
  const onMapClick = React.useCallback((event) => {
    setMarkers((current) => [
      ...current,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  //saving reference to map => hook to re render
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  //HOOK - useRef
  const mapRef = React.useRef(); //retain state
  //gives us lat and lng for user to pan to and zoom in 14
  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);
  console.log('********* ->', panTo());
  //   mapRef.current.panTo({ lat, lng }))

  if (loadError) return 'ERROR LOADING MAPS!';
  if (!isLoaded) return 'Loading maps...';

  //~~~~~~~ App.js return starts ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  return (
    <div className='map-body'>
      <Search />
      <GoogleMap
        id='map'
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={12}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map((marker) => (
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
          />
        ))}
        {console.log(Marker)}
        {selected ? (
          <>
            <InfoWindow
              position={{ lat: selected.lat, lng: selected.lng }}
              onCloseClick={() => {
                setSelected(null);
              }}
            >
              <div>
                <h2>
                  <span role='img' aria-label='here'>
                    📍
                  </span>{' '}
                  You are here!
                </h2>
              </div>
            </InfoWindow>
          </>
        ) : null}
      </GoogleMap>
    </div>
  );
}

function Search({ panTo }) {
  const {
    ready, //these are all the required
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: {
        lat: () => 37.773972,
        lng: () => -122.431297,
      },
      radius: 200 * 1000,
    },
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };
  //once user clicks
  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();
    //take the add and get get geocode resut
    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
      console.log(panTo);
    } catch (error) {
      console.log('😱 Error: ', error);
    }
  };
  //~~~~~~~ Search return  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  return (
    <div className='search'>
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder='🌤 Seach location...'
        />

        <ComboboxPopover>
          <ComboboxList>
            {status === 'OK' &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
