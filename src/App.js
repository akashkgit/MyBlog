import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Header from './components/Header/Header';
import Body from  './components/Body/Body';

import {Component} from 'react';

class App extends Component{



  render()
  {


    return (
  <div>
  <Header />
  
  <Body />
  
  </div> );

  }
}
export default App;