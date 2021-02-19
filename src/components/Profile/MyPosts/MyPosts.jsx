import sMyPost from './MyPosts.module.css'
import Post from './Post/Post.jsx'
import React from 'react';
//import Post from './Post/Post'


const MyPosts = (props) => {

//debugger;  
let ElementPosts = props.posts.map(p=> <Post message={p.message}  countLike={p.like} />);

let newPostElement=React.createRef();

let onAddPost=()=>
{
  props.addPost();  
}

let onPostChange=()=>
{
  let text=newPostElement.current.value;
  props.updateNewPostText(text);
}

  return (
    <div className={sMyPost.posts}>
      <h3>New posts</h3> 
      <div>
        <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      
      {ElementPosts}
    </div>
  );

}
export default MyPosts;
