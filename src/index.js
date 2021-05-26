import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header/Header';
import Body from  './components/Body/Body';

import author from './img/author2.JPG';
import Author from './components/Author/Author';

import styles from  './index.css';
import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  
	<div className={styles.index} scroll="no">
  <Header />
  <Body onunload={()=>alert()} />
  <div className={styles.auth} >
  <Author />
  </div>
  </div>
  ,
  document.getElementById('root')
);



