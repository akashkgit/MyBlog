import React from 'react';
import PropTypes from 'prop-types';
import styles from './Author.module.css';
import author from '../../img/author11.png';
const Author = () => (

  <div className={styles.author} id="auth" >
   
  <img className={styles.authorimg}src= {author} alt="error"/>
  <div className={styles.authorwords} >" My Vision is to get   delighhted by learning multitude of technologies and leverage it to solve Business and
   social cause by my soft skills. I like to Explore philosophy as well and I believe that inorder to suceed, one most be commited to what they want to achieve. A person with commitment is powerful
    than a person with only interest.Start small and progress.Do Less,But better!"
  
  <div>  -Akash kumar</div>
  </div>
  
  </div>
);


export default Author;
