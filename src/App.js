import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styles from  './index.css';
import { CookiesProvider } from "react-cookie";
import reportWebVitals from './reportWebVitals';
import Header from './components/Header/Header';
import Body from  './components/Body/Body';

import {Component} from 'react';
import author from './img/author2.JPG';
import Author from './components/Author/Author';
import Comment from './components/Comment/Comment';
import {createContext,useState} from 'react';
import {contextt} from './MyContext'

import awsconfig from './aws-exports';
import  Amplify, { API, graphqlOperation } from 'aws-amplify';
import { createTodo, updateTodo, deleteTodo } from './graphql/mutations';
Amplify.configure(awsconfig);

export var colors={light:{
  header:"#7da19a",
  body:"#f3f5f0",
  author:"#c5ddeb",
  authorFont:"black",
  headerShadow:"2px 2px 5px 1px grey",
  box:"#e6edda",
  boxShadow:"2px 2px  5px 2px grey",
  boxColor1:"black",
  boxColor2:"black"


},
dark:{
  header:"#022230",
  headerFont1:"#94a848",
  headerFont2:"lightblue",
  bodyFont:"",
  authorFont:"",
  body:"#021b26",
  headerShadow:"2px 2px 5px 1px black",
  author:"#0b1a24",
  boxHoverBC:"#081c26",
  boxHoverBS:"3px 3px  20px 5px black",
  authorFont:"lightblue",
  boxColor1:"#94a848",
  boxColor2:"lightblue"

}}

class App extends Component{

   constructor()
   {
super();
this.fetchData=this.fetchData.bind(this);
this.render=this.render.bind(this);
console.log("APP compoment constructor")
this.state={theme:"light"};
console.log(this.state.theme)


   }


  fetchData(data)
  {

  	alert(data);
  }
  render()
  {
  var self=this;
console.log("@ IN APP RENDER METHOD @",self.state);
    return (
  <div>
<contextt.Provider value={{self}} >
   <Header />
  
  <CookiesProvider>
  <Body  />
  </CookiesProvider>
  <div className={styles.auth} >
  <Author  />
  
  </div>
 </contextt.Provider >
  
  </div> );

  }
}
export default App;