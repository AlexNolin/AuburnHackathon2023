import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import TestData from './TestData';
import Header from './Content/Header';


const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };
  
//   class MyComponents extends Component {
    
//   }
  const App = () => {
    return(
        <div>
          <Header />
          <div>
            <TestData />
          </div>
        </div>
    )
  }
  export default App;
