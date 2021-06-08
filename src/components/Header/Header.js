
import {Component} from 'react';
import PropTypes from 'prop-types';
import i from '../../img/phone.png';
import idark from '../../img/phonedark2.png';
import mail from '../../img/mail9.png';
import indark from '../../img/linkedindark2.png';
import ghdark from '../../img/ghdark3.png';
import git from '../../img/git2.png';
import in1 from '../../img/in3.png';
import styles from './Header.module.css';


class Header extends Component{
constructor()
{

	super();
	this.scroll = this.scroll.bind(this);
}
clickk()
{
var auth=document.getElementById("auth");


auth.scrollIntoView(true);

}

scroll()
{


	document.getElementByClassName('body').style.backgroundColor="red";
}
render()
{
	 return (
		 	(
		 		<div className={styles.header}>
		 	    <div className={styles.one} >The Maverick!</div>
		 	     <div className={styles.two} onClick={this.clickk}>Akash Kumar</div>
		 		<br />
		 		<div className={styles.ancestor}>
		 		
		 		<div  className={styles.details}>
		 		
		 		<img src={i} className={styles.img   } alt="broker" /> <img src={idark} className={styles.imgdark   } alt="broker" /> +91 9962635508   
		 		<img src={mail} className={styles.img2}  alt="broker" /> akashkvit@gmail.com 
		 		<a href="https://www.linkedin.com/in/i-am-akashkumar/" > <img src={in1} className={styles.inlight}  alt="broker" /> <img src={indark} className={styles.indark}  alt="broker" /> Akash Kumar </a>
		 		
				<a href="https://github.com/akashkgit/" > <img src={git} className={styles.git}  alt="broker" /><img src={ghdark} className={styles.gitdark}  alt="broker" /> akashkgit</a>
		 		
		 		</div>
		 		<div className={styles.quote}> "The  Choice is what makes us the Human"</div>

                 
		 		</div>
		 		
 				
		 		</div>
		 		
		 	)
	 	);




	 	
}

}

export default Header;

