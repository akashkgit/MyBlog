import load from "../../img/load3.gif";
import React from 'react';
import PropTypes from 'prop-types';
import Pageno from "../Pageno/Pageno";
import styles from './StickyNotes_comp.module.css';

const StickyNotes_comp = () => (
 <div className={styles.Os_comp}>
     <Pageno  homepage="/os" page1_comp={page1} page2_comp={page2} page3_comp={page3}/>
  </div>
);
const page1=()=>(
	<div id="page1" >
    <div className={styles.divoddtop} >
	<Rest />
	
	
	</div>
	<div className={styles.diveventop} >
   
    


	</div>
	





</div>

	);

const page2=()=>(
	<div id="page1" className={styles.comingsoon} >
    <img src={load} alt="Error" className={styles.i} />
    <p className={styles.under}> Under Development. Explore other Routes or visit later!</p>
    


	</div>
	







	);
	
	const page3=()=>(
	<div id="page1" className={styles.comingsoon} >
    <img src={load} alt="Error" className={styles.i} />
    <p className={styles.under}> Under Development. Explore other Routes or visit later!</p>
    


	</div>
	
	);
	

	const Rest=()=>(
              <div className={styles.divodd}>
              <h3 className={styles.headingodd}>REST IN PEACE!</h3>
              <p>
               There are two types of connections 
               <ul>
               <li> <span className={styles.mark} >Stateful </span> Here, Client information such as session et cetera are stored in server. 
               Hence, it is known as stateful.
               </li> 
               <li> <span className={styles.mark} >Stateless </span>In this type of connection,there is no state information such as session stored in server</li> 
               So, REST(Respresentational state transfer) is a type of stateless architecture that has some of the following features
               <ol>
               <li>Returns JSON OR XML</li>
               <li> The Request  has all the information needed</li>
               <li> NO server side data storage to handle that request</li>
               <li> Uses HTTP </li>
                </ol>
                
                </ul>
	            <span className={styles.mark}>Restful service</span> must employ all the above rules.
	            
	             </p>
                

              </div>
	)

const Threads=()=>(
	<div className={styles.diveven}>
              <h3 class="headingeven">Threads</h3>
              
              <p> 
                Threads are subordinate workers pf a process.A process can have multiple threads. All the the threads of a process share the same location.
                At a time, only one thread can be proccsed by a CPU. So, multi threading requires multi cores in a CPU. A thread context switch can occur of only if 
                t <sub> idle</sub> is less than 2 times  t<sub> context-switch</sub>.context switch of process take more tim than threads switch due to address converion (virtual to physical)

                
              </p>
              </div>


	);
	


StickyNotes_comp.propTypes = {};

StickyNotes_comp.defaultProps = {};

export default StickyNotes_comp;
