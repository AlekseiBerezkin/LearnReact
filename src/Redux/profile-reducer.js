const ADD_POST='ADD-POST';
const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST_TEXT';

let initState={
    postsData: [
        { id: 1, message: 'Post 1', like: 123 },
        { id: 2, message: 'Post 2', like: 44 },
        { id: 1, message: 'Post 3', like: 32 },
        { id: 2, message: 'Post 4', like: 44 },
        { id: 1, message: 'Post 5', like: 32 },
        { id: 2, message: 'Post 6', like: 44 },
        { id: 1, message: 'Post 7', like: 32 },
        { id: 2, message: 'Post 8', like: 44 },

    ],
    newPostText:'Это из state'
};

 const profileReducer=(state=initState, action)=>
{

    switch (action.type) {
        case ADD_POST:
            let newPost={
                id:5,
                message:state.newPostText,
                like:0
            }
            state.postsData.push(newPost);
            state.newPostText='';
            
            //debugger;
            break;
        case UPDATE_NEW_POST_TEXT:
        {state.newPostText=action.newText;}
            break;
    }

    return state;
}

export const addPostActionCreator=()=>{ return{type:ADD_POST}}

export const updateNewPostTextActionCreator=(text)=>
{
  return{
    type:UPDATE_NEW_POST_TEXT,
    newText:text
  }
}

export default profileReducer;