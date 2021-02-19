

import React from 'react';
import {addPostActionCreator,updateNewPostTextActionCreator} from '../../../Redux/profile-reducer'
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
let state=props.store.getState();

//debugger;  


let addPost=()=>
{
  //debugger;
  props.store.dispatch(addPostActionCreator()); 
  
  
}

let onPostChange=(text)=>
{
  //let text=newPostElement.current.value;
  let action=updateNewPostTextActionCreator(text);
  //let action = {type:'UPDATE-NEW-POST_TEXT',newText:text}
  props.store.dispatch(action); 
  //props.updateNewPostText(text);
}

  return (<MyPosts 
    updateNewPostText={onPostChange} 
    addPost={addPost} 
    posts={state.profilePage.postsData} 
    newPostText={state.profilePage.newPostText}/>);

}
export default MyPostsContainer;
