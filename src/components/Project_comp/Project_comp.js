import React from 'react';
import PropTypes from 'prop-types';
import styles from './Project_comp.module.css';
import Pageno from "../Pageno/Pageno";
const Project_comp = () => (
  <div className={styles.project_comp}>
    <Pageno  homepage="/project" page1_comp={Page1} page2_comp={Page2} page3_comp={Page3}/> 
   

  </div>
);
const Page1=()=>(
  <div id="page1" >
<div className={styles.divodd} >
<iframe className={styles.videoodd} width="560" height="315" src="https://www.youtube.com/embed/HRFsYTuLsdQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<p className={styles.txt}>Agrimation is the rover based farming prototype.The software used in National Instrument's labVIEW and the hardwares used are NI myRIO,motors,driver module,wires et cetera.
The rover's left and right movements are controlled by rotating left pair of wheels in one direction and the right pair in the opposite direction. To make a right turn, the right pair of wheels had to be reversed.
 The reversing speed determines the curvature of the right turn.The rover is controlled wireless from the laptop. The rover uses some shared variables to communicate to a laptop.
</p>
 </div>
 <div className={styles.diveven} >
 <iframe className={styles.videoeven}  width="560" height="315" src="https://www.youtube.com/embed/m6teteoz49Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 <p className={styles.txt,styles.txteven}> Redpal  is the step towards heping old age people in secluse by simplifying the available technology.
 This prototype takes the form of an analog watch with some buttons. The buttons covers the features like emergency medical message, automated health message when pulse/temperature goes down,periodical drug delivery,
 google assistant based appliance control,google assistant based entertainment,camera/mic based surveillance and accelerometer based fall detection. This  product has a website to update the user's details and check the IOT data of the sensors in the watch. 
 One can use these data during doctor consultation. The website also has a provision for the socially active people to get registered and help these old age redpals  in their extremeties!
 The softwares used are python,PHP,HTML,CSS,Javascript with XAMP. Xamp has Apache and Mysql server inbuilt. The Main harware used is Raspberry pi 3B+.
 </p>
 </div>
 <div className={styles.divodd} >
 
 <iframe className={styles.videoodd} width="560" height="315" src="https://www.youtube.com/embed/5VISKXZFcN4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<p className={styles.txt}> Eagle Eye RT Cam monitors the rear view of the automobile for reverse gear assistance. It is done using edge detection and ultra-sonic detection in labVIEW.
 The hardwares used are myRio from National Instruments, a web camera and an ultrasonic sensor. The video is captured at 30fps and is processed frame by frame by the labVIEW code. First it is converted into 
 a ggrayscale image and then it undergoes binary thresholding. After that, it is taken to morphological unit where it undergoes dilation et cetera. Atlast, it goes into edge detection unit to get the edges detected.
 Parallely, an ultrasonic sensor keeps monitoring the distance between the wall and the vehicle's rear part.</p>
</div>
</div>
);

const Page2=()=>(
         <div className={styles.comingsoon}>
         <center><p>Coming Soon!</p></center>
         </div>    


);
const Page3=()=>(
  <div className={styles.comingsoon}>
         <center><p>Coming Soon!</p></center>
         </div>    


);

Project_comp.propTypes = {};

Project_comp.defaultProps = {};

export default Project_comp;
