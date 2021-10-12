import React from 'react';
import PropTypes from 'prop-types';
import styles from './Ds_comp.module.css';
import load from "../../img/load25.gif";

const Ds_comp = () => (
  <div className={styles.Ds_comp}>
    <center>
    <img src={load} alt="Error" className={styles.i} />
    
    <p className={styles.under}> Under Development. Explore other Routes or visit later!</p>
    </center>
  </div>
);

Ds_comp.propTypes = {};

Ds_comp.defaultProps = {};

export default Ds_comp;
