//import React from 'react'
import React, { Component, useState } from 'react';
import { GoogleMap, LoadScript, Marker, withScriptjs, withGoogleMap, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '800px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const markerLocation = {
    lat: -3.945,
    lng: -38.723    
}
const markers = [
    {
      id: 1,
      name: "Chicago, Illinois",
      position: { lat: -3.865, lng: -38.123 }
    },
    {
      id: 2,
      name: "Denver, Colorado",
      position: { lat: -3.245, lng: -38.423 }
    },
    {
      id: 3,
      name: "Los Angeles, California",
      position: { lat: -3.445, lng: -38.723 }
    },
    {
      id: 4,
      name: "New York, New York",
      position: { lat: -3.245, lng: -38.623 }
    }
  ];

function MyComponent() {
  const [activeMarker, setActiveMarker] = useState(null);
  
  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAR1BgreyRf-moEkVhF4K0ZjQelceUsLxs"
    >
        
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        class="map"
        onClick={() => setActiveMarker(null)}
        >
            <Marker position = {markerLocation} icon={"http://maps.google.com/mapfiles/ms/icons/marina.png"}/>
        {markers.map(({ id, name, position }) => (
            <Marker
                key={id}
                onClick={() => handleActiveMarker(id)}
                position={position}
                icon = {"http://maps.google.com/mapfiles/ms/icons/marina.png"}
            >
              {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{name}</div>
            </InfoWindow>
          ) : null}
            </Marker>
        ))}
      </GoogleMap>
      
    </LoadScript>
  )
}

export default React.memo(MyComponent)