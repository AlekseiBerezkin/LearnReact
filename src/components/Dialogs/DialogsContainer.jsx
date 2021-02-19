import Dialogs from './Dialogs'
import DialogItems from './DialogItem/DialogItems'
import Message from './Messages/Messages'
import {updateNewMessageBodyCreator,sendMessageCreator} from '../../Redux/dialogs-reducer'



const DialogsContainer = (props) => {
    
let state=props.store.getState().dialogPage;
//debugger;


    let onSendMessageClick=()=>
    {   
        //debugger;
        props.store.dispatch(sendMessageCreator()); 
    }
    
    
    let onNewMessageChange=(body)=>
    {//debugger;
       
       props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (<Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>);
}
export default DialogsContainer;