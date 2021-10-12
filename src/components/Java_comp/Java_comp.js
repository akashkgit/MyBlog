import React from 'react';
import PropTypes from 'prop-types';
import styles from './Java_comp.module.css';
import code1 from "../../img/code1.png";
import load from "../../img/load25.gif";
import {
  BrowserRouter as Router ,
  Switch,
  Route,
  Link,

} from "react-router-dom";
import Pageno from "../Pageno/Pageno";
const page1=()=>(
	<div id="page1" >

	<Oops />
	<NoButYes />
	<Cts />
	





</div>

	);


	const Oops=()=>(
              <div className={styles.divodd}>
              <h3 className={styles.headingodd}>Not 100%</h3>
              <p > Java is not 100% an object oriented programming language.This is because, it has support for primitive non 
              objectified data types like int,float,double et cetera. A 100% object oriented programming language should not 
              support primitive non objectified data types and everything should be objectified. Eventhough, Java supports wrapper 
              class,its still not !00% OOPs as it  has support for int,double et cetera
              </p>
              </div>
	)
	const NoButYes=()=>(
	<div className={styles.divodd}>
              <h3 className={styles.headingeven}>No But yes!</h3>
              <p > Java does not support multiple inheritance classes. So can we say java doesnt support Multiple inheritance? Not really.
              Java supports multiple inheritance of interfaces and also mixed inheritance of multiple interface and a single class. So, its a Yes!
              </p>
              </div>


	);

const Cts=()=>(
	<div className={styles.divodd}>
              <h3 className={styles.headingodd} >Abstract but subtle!</h3>
              <img src={code1} alt="error" className={styles.img} />
              <p> 
                 
                  This code does not throw an error as the method a which is of same signature as the one in 
                  class A is defined and is inherited along with the interface in class B. So, class B takes
                  that a method as the over ridden copy of the  method in interface i. extend always comes 
                  before implements."
              </p>
              </div>


	);
const page2=()=>(
	 <div className={styles.comingsoon}>
         <center>
    <img src={load} alt="Error" className={styles.i} />
    
    <p className={styles.under}> Under Development. Explore other Routes or visit later!</p>
    </center>
         </div>    


	);
	const page3=()=>(
	 <div className={styles.comingsoon}>
         <center>
    <img src={load} alt="Error" className={styles.i} />
    
    <p className={styles.under}> Under Development. Explore other Routes or visit later!</p>
    </center>
         </div>    



	);



const Java_comp = () => (
  <div className={styles.Java_comp}>
     
      <Pageno  homepage="/java" page1_comp={page1} page2_comp={page2} page3_comp={page3}/>


  </div>
);

export default Java_comp;
