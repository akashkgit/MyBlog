import React from 'react';
import PropTypes from 'prop-types';
import styles from './Pageno.module.css';

import {
 BrowserRouter as Router ,
  Switch,
  Route,
  Routes,
  Link,

} from "react-router-dom";

const Pageno = (props) => {
  let P1=props.page1_comp;
  let P2=props.page2_comp;
  let P3=props.page3_comp;
  return  <div>
     {/* className={styles.Pageno}> */}
     
   <Routes>
       <Route >
       <Route index  element={<P1 />} />
       <Route  path="2" element={<P2 />} />
       <Route path="3" element={<P3 />} />
       </Route>
       </Routes>
       <div id="pagenodiv" >
        {/* ClassName={styles.pagenodiv}> */}
       <Link className={styles.pages} to="1" >1</Link>
        
        
       <Link className={styles.pages} to="2" >2</Link>
       <Link className={styles.pages} to="3" >3</Link>
        
      </div>


       
  </div>
};

Pageno.propTypes = {};

Pageno.defaultProps = {};

export default Pageno;
