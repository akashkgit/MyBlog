import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pageno.module.css';

import {
  HashRouter as Router ,
  Switch,
  Route,
  Link,

} from "react-router-dom";

const Pageno = (props) => (
  <div className={styles.Pageno}>
   <Router>
       <Route   path="/1" component={props.page1_comp} />
       
       
       <Route   path={props.homepage} component={props.page1_comp} />
       <Route path="/2" component={props.page2_comp} />
       <Route path="/3" component={props.page3_comp} />
       <div id="pagenodiv" className={styles.pagenodiv}>
       <Link className={styles.pages} to="/1" >1</Link>
        
        
       <Link className={styles.pages} to="/2" >2</Link>
       <Link className={styles.pages} to="/3" >3</Link>
        
      </div>


       </Router>
  </div>
);

Pageno.propTypes = {};

Pageno.defaultProps = {};

export default Pageno;
