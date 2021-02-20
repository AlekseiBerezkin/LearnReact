

import React from 'react';
import {addPostActionCreator,updateNewPostTextActionCreator} from '../../../Redux/profile-reducer'
import { connect } from 'react-redux'
import MyPosts from './MyPosts';


/*const MyPostsContainer = () => {

  return (<storeContext.Consumer> 
    {
    store=>
      {  
      let state=store.getState();

let addPost=()=>
{
  //debugger;
  store.dispatch(addPostActionCreator()); 
  
}

let onPostChange=(text)=>
{
  //let text=newPostElement.current.value;
  let action=updateNewPostTextActionCreator(text);
  //let action = {type:'UPDATE-NEW-POST_TEXT',newText:text}
  store.dispatch(action); 
  //props.updateNewPostText(text);
}

      return <MyPosts
      updateNewPostText={onPostChange} 
      addPost={addPost} 
      posts={state.profilePage.postsData} 
      newPostText={state.profilePage.newPostText}/>
      }}

  </storeContext.Consumer>
    );

}*/

let mapStateToProps=(state)=>{
  return{
    posts:state.profilePage.postsData,
    newPostText:state.profilePage.newPostText
  }
  };

let mapDispatchToprops=(dispatch)=>{
      return{

        updateNewPostText:(text)=>{let action=updateNewPostTextActionCreator(text);dispatch(action); },
        addPost:()=>{dispatch(addPostActionCreator()); }

      }
  };
  

  const MyPostsContainer=connect(mapStateToProps,mapDispatchToprops)(MyPosts);

export default MyPostsContainer;
