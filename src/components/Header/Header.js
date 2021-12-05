
import {Component} from 'react';
import PropTypes from 'prop-types';
import i from '../../img/phone.png';
import idark from '../../img/phonedark2.png';
import mail from '../../img/mail9.png';
import indark from '../../img/linkedindark2.png';
import ghdark from '../../img/ghdark3.png';
import git from '../../img/git2.png';
import in1 from '../../img/in3.png';
import light from '../../img/dark3.png';
import dark from '../../img/dark2.png';
import styles from './Header.module.css';
import {contextt} from  "../../MyContext";
import {colors} from "../../App"

class Header extends Component{
	
	
constructor()
{

	super();
	this.scroll = this.scroll.bind(this);
	this.changeTheme=this.changeTheme.bind(this);
	this.render=this.render.bind(this);

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
changeTheme(){


this.context.self.setState((state)=>{
if(state.theme=="light")state.theme="dark";
else state.theme="light"
return state;

},()=>{console.log("^^^^^^^^^^^^^^",this.context.self.state);});



}
render()

{

	//var se=this.context
  
	//var styleObj=colors[this.context.self.state.theme];
	 return (
		<contextt.Consumer >
	 	{(contxt)=>(
		 	
		 		<div className={styles.header} style={{"background-color":colors[contxt.self.state.theme].header,"box-shadow":colors[contxt.self.state.theme].headerShadow}} >
		 		
		 		
		 	    <div className={styles.one} style={{"color":colors[contxt.self.state.theme].headerFont1}} >The Maverick!</div>
		 	     <div className={styles.two} onClick={this.clickk} style={{"color":colors[contxt.self.state.theme].headerFont1}}>Akash Kumar</div>
		 		<br />
		 		<div className={styles.ancestor} style={{"color":colors[contxt.self.state.theme].headerFont2}}>
		 		
		 		<div  className={styles.details} >
		 		
		 		<img src={i} className={styles.img   } alt="broker" /> <img src={idark} className={styles.imgdark   } alt="broker" /> +91 9962635508   
		 		<img src={mail} className={styles.img2}  alt="broker" /> akashkvit@gmail.com 
		 		<a  style={{"color":colors[contxt.self.state.theme].headerFont2}} href="https://www.linkedin.com/in/i-am-akashkumar/" > <img src={contxt.self.state.theme=="light"?in1:indark} className={styles.inlight}  alt="broker" /> <img src={contxt.self.state.theme=="light"?in1:indark} className={styles.indark}  alt="broker" /> Akash Kumar </a>
		 		
				<a style={{"color":colors[contxt.self.state.theme].headerFont2}} href="https://github.com/akashkgit/" > <img src={contxt.self.state.theme=="light"?git:ghdark} className={styles.git}  alt="broker" /><img src={contxt.self.state.theme=="light"?git:ghdark}  className={styles.gitdark}  alt="broker" /> akashkgit</a>
		 		<img src={contxt.self.state.theme=="light"?dark:light}  onClick={this.changeTheme} alt={contxt.self.state.theme} style={{float:"right","margin-right":"2vh",height:"2%",width:"2%"}} />
		 		</div>
		 		
		 		<div className={styles.quote}> "The  Choice is what makes us the Human"</div>
            
		 		</div>
		 		 
		 		
 				
		 		</div>

		 		
		 	)
	 }
	 < /contextt.Consumer >
	 	);




	 	
}

}
Header.contextType=contextt;
export default Header;

