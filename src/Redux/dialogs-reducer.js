const UPDATE_NEW_MESSAGE_BODY='UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE='SEND_MESSAGE';

let initState={
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
};

export const dialogsReducer=(state=initState, action)=>
{
    


switch(action.type)
{
    case UPDATE_NEW_MESSAGE_BODY:
        
        return{
            ...state,
            newMessageBody:action.body
        }


        case SEND_MESSAGE:
            let body=state.newMessageBody;
            return{
                ...state,
                newMessageBody:'',
                messageData:[...state.messageData,{id:10,message:body}]
                
                }
                default: return (state)
                
  
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

export default dialogsReducer;