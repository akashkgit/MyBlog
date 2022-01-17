import React from 'react';
import PropTypes from 'prop-types';
import styles from './Body.module.css';
<<<<<<< Updated upstream
import  Java_comp from "../Java_comp/Java_comp";
import  C_comp from "../C_comp/C_comp";
import  Python_comp from "../Python_comp/Python_comp";
import  Ds_comp from "../Ds_comp/Ds_comp";
import  Os_comp from "../Os_comp/Os_comp";
import  Project_comp from "../Project_comp/Project_comp";
import  Music_comp from "../Music_comp/Music_comp";
import  Books_comp from "../Books_comp/Books_comp";
import  StickyNotes_comp from "../StickyNotes_comp/StickyNotes_comp";
import { browserHistory } from 'react-router';
import open from "../../img/open3.png";
import opendark from "../../img/opendark7.png";
import tp from "../../img/up6.png";
import bm from "../../img/down7.png";
import Comment from '../Comment/Comment';
=======
>>>>>>> Stashed changes
import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Box from '../Box/Box';
import book_comp from '../Books_comp/Books_comp';
import java from '../../img/java3.png';
import c from '../../img/c.png';
import python from '../../img/python3.png';
import ds from '../../img/ds1.png';
import os from '../../img/os2.png';
import project from '../../img/project2.png';
import music from '../../img/music2.png';
import book from '../../img/book.png';
import random from '../../img/random3.png';
import author from '../../img/author2.JPG';
import Author from '../Author/Author';
<<<<<<< Updated upstream
import {contextt} from  "../../MyContext";
import {colors} from "../../App"

var message="";
if(!localStorage.getItem("visited"))
{

if(window.matchMedia('(prefers-color-scheme: light)').matches)
{
  message="This Device is in light mode. If you wish to  have dark and cooling UI, turn on dark mode. ";
}
else
{
  message="This Device is in dark mode. If you wish to  have lighter UI, turn off dark mode.";
}
setTimeout(function(){ alert(message); }, 12000);

localStorage.setItem("visited","true");
}
setTimeout(fbk, 15000);
function fbk()
{

 if(!localStorage.getItem("name"))
  {
 
 alert(" I request you to submit your feedback in the feedback box! ");
}



}


class Body extends Component
{
  
 
  constructor(props)
  {
    super(props);
    this.hide=this.hide.bind(this);
   
    this.state={opened:false};
    this.top=React.createRef();
    this.bottom=React.createRef();
    this.show=this.show.bind(this);
    this.isOpened=false;

  }
 
hide()
{
this.setState((state)=>{state.isOpened=!state.isOpened;return state;},(state)=>console.log("in hide",this.state.isOpened));
console.log("in hide",this.state.isOpened);
var dark=window.matchMedia('(prefers-color-scheme: dark)').matches;
if(dark)document.getElementById("opendark").style.display='block';
else document.getElementById("openlight").style.display='block';
document.getElementById("router").style.display="none";
//document.getElementById("opendark").style.display='block';
document.getElementById("router_comp").style.display='block';


}



 show()
{ 
  
  this.setState((state)=>{state.isOpened=!state.isOpened;return state;},(state)=>console.log("in show",this.state.isOpened));
  
 this.setState((state)=>(this.state.opened=true));
console.log(this.state.isOpened);

  document.getElementById("router").style.display="block";
  var dark=window.matchMedia('(prefers-color-scheme: dark)').matches;

if(dark)document.getElementById("opendark").style.display='none';
else
 document.getElementById("openlight").style.display='none';
document.getElementById("router_comp").style.display='none';
}

render(){
  return (
    <contextt.Consumer >

    {(con)=>(
  <div className={styles.body} style={{"background-color":colors[con.self.state.theme].body}} id="body">

<img src={open}  onClick={this.show} className={this.state.opened?styles.openlight:styles.unopenedlight} id="openlight" alt="error"    />
<img src={opendark}  onClick={this.show} className={this.state.opened?styles.opendark:styles.unopeneddark} id="opendark" alt="error"    />
<p className={styles.expand}> Expand</p>
 


<img src={tp} ref={this.top} alt="error" onClick={()=>{console.log("eneterd");this.bottom.current.scrollIntoView();}}   style={{display:this.state.isOpened?"inline":"none",opacity:"0.3",float:"right",height:"2%",width:"2%"}}/>
   <Router style={{clear:"right"}}>
   <div id="router"  className={styles.router}>
  <br />
  <Link to="/os" onClick={this.hide} ><Box src={os}  txt="OS Overview" txt2="A click on this will open a list of interesting quick snippets of OS concepts. I ll walk through Threads,Process etc."/></Link>

  <Link to="/java" onClick={this.hide} ><Box  id="one"  src={java} txt="Java Scripts" txt2="I dicuss about various important concepts in java that I  felt are quite baffling and significant to get a proficient in java"/></Link>
  

  <Link to="/project" onClick={this.hide}  ><Box src={project} txt="Project Arena" txt2="Open this arena to find the playlist of some of my project works in my college days. "/></Link>
  <Link to="/music" onClick={this.hide} ><Box src={music} txt="Music Hall" txt2="Unlock this Hall to listen some of my musical plays that I do during my free time!"/></Link>
  <Link to="/book" onClick={this.hide}  ><Box src={book}  txt="Enlightment from Books" txt2="Reading them is easy.But,putting them into practice is arduous! It tests our determination. "/></Link>  
  
  <Link to="/stickynotes" onClick={this.hide} ><Box src={random}  txt="Sticky notes" txt2="Unpin this to see some of my miscellanious notes that I have taken on the go."/></Link>

  <Link to="/c" onClick={this.hide} ><Box id="two" src={c} txt="C & C++ Notes" txt2="This has some of the intruiging yet ambivalent C& C++concepts that I have gone through and felt its worth taking a note"/></Link>
  

<Link to="/python" onClick={this.hide}  ><Box src={python} txt="Python Bites"  txt2="This has some of the intruiging yet ambivalent python concepts that I have gone through and felt its worth taking a note"/></Link>
<Link  to="/ds" onClick={this.hide}  ><Box src={ds} txt="My DS Engine"  txt2="Here, I jot down some of the Data Structure concepts for a quick glance!"/></Link>
<Link className={styles.last} to="/fb" onClick={this.hide}  ><Box src={fb} txt="Feedback"  txt2="I kindly request you to give your feedback for my blog regarding  UI, content et cetera. It would motivate me a lot."/></Link>
  
  
  
  <br />
  <br />
  
 </div>

 <div id="router_comp" className={styles.router_comp} >
 
  <Route exact  path="/" />
  <Route exact path="/java" component={Java_comp} />
  <Route exact path="/c" component={C_comp} />
  <Route exact path="/python" component={Python_comp} />
  <Route exact path="/ds" component={Ds_comp} />
  <Route exact path="/os" component={Os_comp} />
  <Route exact path="/project" component={Project_comp} />
  <Route exact path="/music" component={Music_comp} />
  <Route exact path="/book" component={Books_comp} />
  <Route exact path="/stickynotes" component={StickyNotes_comp} />
=======
const Body = () => (
  <div className={styles.body}  id="body">
   
  <link to="/java" ><Box  id="one" src={java} txt="Java notes" txt2="I dicuss about various important concepts in java that I have felt is quite baffling and significant to get a command over this"/></link>
  <link to="/c" > <Box id="two" src={c} txt="C & C++ Notes" txt2="This has some of the intruiging yet ambivalent concepts that I have gone though and felt its worth taking a note"/></link>
    <link to="/ds" > <Box src={ds} txt="My Data Structure Dictionary" txt2="This has some of the intruiging yet ambivalent concepts that I have gone though and felt its worth taking a note"/></link>
  <link to="/os" > <Box src={os} txt="Operating System Overview" txt2="This has some of the intruiging yet ambivalent concepts that I have gone though and felt its worth taking a note"/></link>
  <link to="/project" > <Box src={project} txt="Project Arena" txt2="This has some of the intruiging yet ambivalent concepts that I have gone though and felt its worth taking a note"/></link>
  <link to="/music" > <Box src={music} txt="Music Hall" txt2="This has some of the intruiging yet ambivalent concepts that I have gone though and felt its worth taking a note"/></link>
  <link to="/book" > <Box src={book} txt="The enlightment of Books" txt2="This has some of the intruiging yet ambivalent concepts that I have gone though and felt its worth taking a note"/></link>
  <link to="/random" > <Box src={random} txt="Sticky notes" txt2="This has some of the intruiging yet ambivalent concepts that I have gone though and felt its worth taking a note"/></link>
  <br />
  <br />
  <Route path="/java" component={java_comp} />
  <Route path="/c" component={c_comp} />
  <Route path="/ds" component={ds_comp} />
  <Route path="/os" component={os_comp} />
  <Route path="/project" component={project_comp} />
  <Route path="/music" component={music_comp} />
  <Route path="/book" component={book_comp} />
  <Route path="/random" component={random_comp} />
>>>>>>> Stashed changes
  

<<<<<<< Updated upstream
  </div> 
 </Router>
<img src={bm} ref={this.bottom} alt="error" onClick={()=>{console.log("eneterd");this.top.current.scrollIntoView(); }}  style={{display:this.state.isOpened?"inline":"none",opacity:"0.3",float:"right",height:"2%",width:"2%"}}/> 
 <p style={{clear:"right"}}> </p>
=======
  <div className={styles.auth} >
  <Author />
  </div>


>>>>>>> Stashed changes
  </div>
  )
  }




</contextt.Consumer >
);

Body.propTypes = {};

Body.defaultProps = {};

export default Body;


