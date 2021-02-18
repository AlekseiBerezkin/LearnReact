import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'


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

        this._state.profilePage=profileReducer(this._state.profilePage,action);
        this._state.dialogPage=dialogsReducer(this._state.dialogPage,action);
        this._state.sidebarPage=sidebarReducer(this._state.sidebarPage,action);
        this._callSubscriber(this._state);


 
}
}



export default store;
window.store=store;