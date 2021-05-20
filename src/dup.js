import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header/Header';
import Body from  './components/Body/Body';
import Footer from  './components/Footer/Footer';
import Tabs from './components/Tabs/Tabs';
import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";

function one()
{

	return (<h1>one</h1>);
}


function two()
{

	return <h1>two</h1>;
}
 
function Rout()

{

	return (<div>
    <h1>React Router Example</h1>
    <ul role="nav">
      <li><Link to="/one">Client Side</Link></li>
      <li><Link to="/two">Server Side</Link></li>
    </ul>
     
    <div>
      <Route path='/one' component={one} exact />
      <Route path='/two' component={two} />
    </div>
  </div>);
}

ReactDOM.render(
	<div>
 <App />
 <BrowserRouter>
 <Rout />
 </BrowserRouter>
  </div>,
  document.getElementById('root')
);


// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
