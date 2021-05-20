
import {Component} from 'react';
import PropTypes from 'prop-types';
import i from '../../img/phone.png';
import mail from '../../img/mail9.png';
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
		 	    <center className={styles.one} >The Maverick!</center>
		 	     <center className={styles.two} onClick={this.clickk}>Akash Kumar</center>
		 		
		 		<center className={styles.ancestor}>
		 		<center  className={styles.details}>
		 		<p> 
		 		<img src={i} className={styles.img   } alt="broker" /> +91 9962635508   
		 		<img src={mail} className={styles.img2}  alt="broker" /> akashkvit@gmail.com 
		 		<a href="https://www.linkedin.com/in/i-am-akashkumar/" > <img src={in1} className={styles.img2}  alt="broker" /> Akash Kumar </a>
		 		
				<a href="https://github.com/akashkgit/" > <img src={git} className={styles.git}  alt="broker" />akashkgit</a>
		 		</p>
		 		</center>
		 		<center className={styles.quote}><p> "The  Choice is what makes us the Human"</p></center>

                 
		 		</center>
		 		

		 		</div>
		 	)
	 	);




	 	
}

}

export default Header;

