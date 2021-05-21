import React from 'react';
import PropTypes from 'prop-types';
import styles from './Body.module.css';
import  Java_comp from "../Java_comp/Java_comp";
import  C_comp from "../C_comp/C_comp";
import  Python_comp from "../Python_comp/Python_comp";
import  Ds_comp from "../Ds_comp/Ds_comp";
import  Os_comp from "../Os_comp/Os_comp";
import  Project_comp from "../Project_comp/Project_comp";
import  Music_comp from "../Music_comp/Music_comp";
import  Books_comp from "../Books_comp/Books_comp";
import  StickyNotes_comp from "../StickyNotes_comp/StickyNotes_comp";

import open from "../../img/open3.png";
import {
  BrowserRouter as Router ,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Box from '../Box/Box';
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
function hide()
{


document.getElementById("router").style.display="none";
document.getElementById("open").style.display='block';
document.getElementById("router_comp").style.display='block';

}
function show()
{
  document.getElementById("router").style.display="block";
document.getElementById("open").style.display='none';
document.getElementById("router_comp").style.display='none';
}
const Body = () => (
  <div className={styles.body}  id="body">
<img src={open}  onClick={show} className={styles.open} id="open" alt="error"    />
<p className={styles.expand}> Expand</p>
  <div className={styles.box}>


</div>
   <Router>
   <div id="router"  className={styles.router}>
  <br />
  <Link to="/os" onClick={hide} ><Box src={os}  txt="OS Overview" txt2="A click on this will open a list of interesting quick snippets of OS concepts. I ll walk through Threads,Process etc."/></Link>

  <Link to="/java" onClick={hide} ><Box  id="one"  src={java} txt="Java Scripts" txt2="I dicuss about various important concepts in java that I  felt are quite baffling and significant to get a proficient in java"/></Link>
  
  <Link to="/project" onClick={hide}  ><Box src={project} txt="Project Arena" txt2="Open this arena to find the playlist of some of my project works in my college days"/></Link>
  <Link to="/music" onClick={hide} ><Box src={music} txt="Music Hall" txt2="Unlock this Hall to listen some of my musical plays that I do during my free time!"/></Link>
  <Link to="/c" onClick={hide} ><Box id="two" src={c} txt="C & C++ Notes" txt2="This has some of the intruiging yet ambivalent C& C++concepts that I have gone through and felt its worth taking a note"/></Link>
  
  <Link to="/ds" onClick={hide}  ><Box src={ds} txt="My Data Structure Dictionary"  txt2="Here, I jot down some of the Data Structure concepts for a quick glance!"/></Link>
<Link to="/python" onClick={hide}  ><Box src={python} txt="Python Bites"  txt2="This has some of the intruiging yet ambivalent python concepts that I have gone through and felt its worth taking a note"/></Link>

  
  <Link to="/book" onClick={hide}  ><Box src={book}  txt="The enlightment by Books" txt2="Get Enlightened by reading some of my hand picked verses from good proficient Books that had piqued my interest "/></Link>
  <Link to="/sticky notes" onClick={hide} ><Box src={random}  txt="Sticky notes" txt2="Unpin this to see some of my miscellanious notes that I have taken on the go."/></Link>
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
  <Route exact path="/sticky notes" component={StickyNotes_comp} />


  </div> 
 </Router>

  


  </div>





);

Body.propTypes = {};

Body.defaultProps = {};

export default Body;


