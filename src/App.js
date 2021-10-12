import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Header from './components/Header/Header';
import Body from  './components/Body/Body';

import {Component} from 'react';


import awsconfig from './aws-exports';
import  Amplify, { API, graphqlOperation } from 'aws-amplify';
import { createTodo, updateTodo, deleteTodo } from './graphql/mutations';
Amplify.configure(awsconfig);


class App extends Component{

   constructor()
   {
super();
this.fetchData=this.fetchData.bind(this);


   }
  fetchData(data)
  {

  	alert(data);
  }
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