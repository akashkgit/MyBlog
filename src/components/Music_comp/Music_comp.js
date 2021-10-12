import React from 'react';
import PropTypes from 'prop-types';
import styles from './Music_comp.module.css';
import Pageno from "../Pageno/Pageno";

const Music_comp = () => (
  <div className={styles.Music_comp}>

  <Pageno  homepage="/music" page1_comp={Page1} page2_comp={Page2} page3_comp={Page3}/> 
   

  </div>
);
const Page1=()=>(
  <div id="page1" >
 <iframe className={styles.videoodd} width="560" height="315" src="https://www.youtube.com/embed/jh2s4gFVm24" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 <iframe   className={styles.videoeven} width="560" height="315" src="https://www.youtube.com/embed/7S6s227asEM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 <iframe  className={styles.videoodd} width="560" height="315" src="https://www.youtube.com/embed/wu2pPSWrBRM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<iframe width="560"  className={styles.videomid} height="315" src="https://www.youtube.com/embed/q33tC-VmRho" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
);

const Page2=()=>(
       <div id="page2" >
 <iframe className={styles.videoodd} width="560" height="315" src="https://www.youtube.com/embed/_-2-O6oRQaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 <iframe className={styles.videoeven}  width="560" height="315" src="https://www.youtube.com/embed/S-19MnRrWMM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 <iframe className={styles.videoodd} width="560" height="315" src="https://www.youtube.com/embed/iIKtV3732tQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

);
const Page3=()=>(
       <div id="page3" >

 <iframe className={styles.videoodd} width="560" height="315" src="https://www.youtube.com/embed/ZmcSwsIR6LA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 <iframe className={styles.videoeven}  width="560" height="315" src="https://www.youtube.com/embed/-I6uY2X1ojo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 <iframe className={styles.videoodd} width="560" height="315" src="https://www.youtube.com/embed/Hq50ajghqOI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

);
Music_comp.propTypes = {};

Music_comp.defaultProps = {};

export default Music_comp;
