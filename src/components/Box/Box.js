import React from 'react';

import styles from './Box.module.css';



const Box = (props) => (
  
  <div className={styles.box}> 

  <center><img className={styles.logos}src={props.src} alt={props.alt} /></center>
  <center><p className={styles.txt}>{props.txt}</p></center>
  <p className={styles.txt2}> {props.txt2}</p>
    
</div>
);

Box.propTypes = {};

Box.defaultProps = {};

export default Box;
