import React from 'react';
import PropTypes from 'prop-types';
import styles from './Comment.module.css';
import { useCookies } from 'react-cookie';
import { useHistory } from "react-router-dom";
import { API, graphqlOperation } from 'aws-amplify';

import { createPost, updatePost, deletePost } from '../../graphql/mutations';
function fetchData()
{
  
  const todo = { name: document.getElementById("name").value, 
  title: document.getElementById("title").value ,
  description:document.getElementById("description").value,
   rating:document.getElementById("rating").value,
   email:document.getElementById("email").value,
   mobile:document.getElementById("mobile").value

};

/* create a todo */
   API.graphql(graphqlOperation(createPost, {input: todo}));
 alert("Thanks a lot for your submitting this form!I appreciate your effort !");
 localStorage.setItem("name",document.getElementById("name").value);
 document.getElementById("comnt").reset();
 window.location.href="https://akashkgit.github.io/MyBlog";
 


 //window.location.href="https://akashkgit.github.io/MyBlog/";
 

}

const Comment = () => {



  const [cookies, setCookie] = useCookies(['user']);

   const handle = () => {
      setCookie('Name', "akash" ,{ path: '/' });
      setCookie('Password', "wer", { path: '/' });
   };

   return (
  <div className={styles.Comment}>
  <form id="comnt" >
  <p className={styles.heading}>Feedback arena</p>
    <input type="text" id="name"   placeholder="your name" />
    <input type="text" id="email"   placeholder="your mailid" />
    <input type="text" id="mobile"   placeholder="your mobile" />
    <input type="text" id="title"  placeholder="The title "  />
    <textarea id="description" placeholder ="succintly brief your query"
   rows="10" cols="50" ></textarea>
   <input type="text" id="rating"  placeholder="rate out of 5" />
   <input type="button" onClick={fetchData} value="Submit" />
   </form>
  </div>
);
 }



Comment.propTypes = {};

Comment.defaultProps = {};

export default Comment;
