import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './App.css';
import TestData from './TestData';
import Header from './Content/Header';
import Map from './Content/Map';
import Sidebar from './Content/Sidebar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


// const containerStyle = {
//     width: '400px',
//     height: '400px'
//   };
  
//   const center = {
//     lat: -3.745,
//     lng: -38.523
//   };
  
//   class MyComponents extends Component {
    
//   }
  const App = () => {
    return(
        <div>
          <div>
            <header>
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
              integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
              crossorigin="anonymous"
            />
            </header>
          </div>
          <Header />
          <div class="row">
            <Map />
            <Sidebar />
          </div>
        </div>
    )
  }
  export default App;
