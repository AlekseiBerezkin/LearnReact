const ADD_POST='ADD-POST';
const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST_TEXT';
const UPDATE_NEW_MESSAGE_BODY='UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE='SEND_MESSAGE';
let store={
    _state : {
        dialogPage: {
            messageData: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'A' },
                { id: 3, message: 'B' },
                { id: 4, message: 'S' },
                { id: 5, message: 'D' },
                { id: 6, message: 'ТузCик' }
            ],
    
            dialogsData: [
                { id: 1, name: 'Армян', image: "https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png" },
                { id: 2, name: 'Яна', image: "https://i.pinimg.com/236x/7c/ab/18/7cab184c5e791921ed607e23458492b6.jpg" },
                { id: 3, name: 'Саша', image: "https://archilab.online/images/1/123.jpg" },
                { id: 4, name: 'Толя', image: "https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png" },
                { id: 5, name: 'Вася', image: "https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png" },
                { id: 6, name: 'Тузик', image: "https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png" }
            ],
            newMessageBody:""
        },
    
        profilePage: {
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
        },
    
        sidebarPage: {
            sidebar: [
                { id: 1, name: 'Армян', image: "https://dthezntil550i.cloudfront.net/kg/latest/kg1802132010216500004834729/1280_960/557d644f-12f3-49e1-bb66-23c16400540d.png" },
                { id: 2, name: 'Яна', image: "https://i.pinimg.com/236x/7c/ab/18/7cab184c5e791921ed607e23458492b6.jpg" },
                { id: 3, name: 'Саша', image: "https://archilab.online/images/1/123.jpg" }
            ]
        }
    
    },
    _callSubscriber()
    {
    console.log('state changed');
    },
    getState()
    {
        return this._state
    },

    subscribe(observer)
    {
        this._callSubscriber=observer;
    },
    dispatch(action)
    {
        if(action.type=='ADD-POST'){
            let newPost={
                id:5,
                message:this._state.profilePage.newPostText,
                like:0
            }
            this._state.profilePage.postsData.push(newPost);
            this._callSubscriber(); 
        }
        else
        {
            if(action.type=='UPDATE-NEW-POST_TEXT' )
            {
                this._state.profilePage.newPostText=action.newText;
                this._callSubscriber();
            }
            else if(action.type==UPDATE_NEW_MESSAGE_BODY){
                this._state.dialogPage.newMessageBody=action.body;
                this._callSubscriber(this._state);
            }
            else if(action.type==SEND_MESSAGE){
                
                let body=this._state.dialogPage.newMessageBody;
                this._state.dialogPage.newMessageBody='';
                this._state.dialogPage.messageData.push({id:10,message:body});
                this._callSubscriber(this._state);

            }
    }
}
}

export const addPostActionCreator=()=>{return{type:ADD_POST}}

export const updateNewPostTextActionCreator=(text)=>
{
  return{
    type:UPDATE_NEW_POST_TEXT,
    newText:text
  }
}
export const sendMessageCreator=()=>{return{type:SEND_MESSAGE}}
export const updateNewMessageBodyCreator=(body)=>
{
  return{
    type:UPDATE_NEW_MESSAGE_BODY,
    body:body
  }
}
export default store;
window.store=store;