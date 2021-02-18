import sMyPost from './MyPosts.module.css'
import Post from './Post/Post.jsx'
import React from 'react';
import {addPostActionCreator,updateNewPostTextActionCreator} from '../../../Redux/profile-reducer'


const MyPosts = (props) => {

//debugger;  
let ElementPosts = props.posts.postsData.map(p=> <Post message={p.message}  countLike={p.like} />);

let newPostElement=React.createRef();

let addPost=()=>
{
  //debugger;
  props.dispatch(addPostActionCreator()); 
  
  
}

let onPostChange=()=>
{
  let text=newPostElement.current.value;
  let action=updateNewPostTextActionCreator(text);
  //let action = {type:'UPDATE-NEW-POST_TEXT',newText:text}
  props.dispatch(action); 
  //props.updateNewPostText(text);
}

  return (
    <div className={sMyPost.posts}>
      <h3>New posts</h3> 
      <div>
        <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      
      {ElementPosts}
    </div>
  );

}
export default MyPosts;
