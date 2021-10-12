import { CookiesProvider } from "react-cookie";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header/Header';
import Body from  './components/Body/Body';

import author from './img/author2.JPG';
import Author from './components/Author/Author';
import Comment from './components/Comment/Comment';

import styles from  './index.css';
import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";
import * as AWS from 'aws-sdk'
import { ConfigurationOptions } from 'aws-sdk'

const configuration: ConfigurationOptions = {
    region: 'YOUR_REGION',
    secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
    accessKeyId: 'YOUR_ACCESS_KEY_ID'
}

AWS.config.update(configuration);

// ENDS HERE
function darkify()
{

}

ReactDOM.render(
  
	<div className={styles.index} scroll="no">
   <Header />
  
  <CookiesProvider>
  <Body onload={()=>alert()} />
  </CookiesProvider>
  <div className={styles.auth} >
  <Author  onclick={darkify()}/>
  
  </div>
 
  </div>
  ,
  document.getElementById('root')
);



