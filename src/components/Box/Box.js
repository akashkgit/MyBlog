import React from 'react';

import styles from './Box.module.css';
import {contextt} from  "../../MyContext";
import {colors} from "../../App"
import {useState,useContext,useEffect} from 'react'


const Box = (props) => {
       			var cntxt=useContext(contextt)
            var theme=cntxt.self.state.theme;
       			console.log("!!!!!!!!!!!!!!!!!!!",theme,colors[theme].boxColor1)
	 var [style,setStyle]=useState({
        "background-color": "",
        "box-shadow":"",




	  });
var styleText1={
        
        "color":(colors[theme].boxColor1),
        "background-color":""




    };
var styleText2={
        
        "background-color":"",
        "color":theme=="light"?"black":"lightblue"
        



    };
   
	  var hover=()=>{

       setStyle({
        "background-color": theme=="light"?"#e6edda":"#081c26",
        "box-shadow":theme=="light"?"2px 2px  5px 2px grey":"3px 3px  20px 5px black",

});

   

	  }
	  var unHover=()=>{
       setStyle({
        "background-color": "",
        "box-shadow":"",

});


	  }


return (
  <contextt.Consumer >
  {(con)=>(
  	<div onMouseEnter={hover} onMouseLeave={unHover} className={styles.box} style={{...style}}> 

  <center><img className={styles.logos}src={props.src} alt={props.alt} /></center>
  <center><p style={{...styleText1}} className={styles.txt} >{props.txt}</p></center>
  <p style={{...styleText2}} onMouseEnter={()=>console.log(theme=="light",theme)}className={styles.txt2}   > {props.txt2}</p>
    
</div>
)}
</contextt.Consumer>
);
}
Box.propTypes = {};

Box.defaultProps = {};

export default Box;
