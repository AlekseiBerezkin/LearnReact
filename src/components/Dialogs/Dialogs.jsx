import { NavLink } from 'react-router-dom';
import sDialogs from './Dialogs.module.css';
import DialogItems from './DialogItem/DialogItems'
import Message from './Messages/Messages'
import {updateNewMessageBodyCreator,sendMessageCreator} from '../../Redux/dialogs-reducer'



const Dialogs = (props) => {
    
let state=props.store.getState().dialogPage;

    let DialogsElements = state.dialogsData.map(d => <DialogItems name={d.name} id={d.id} img={d.image}/>);
    let MessageElements = state.messageData.map(d => <Message message={d.message} />);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick=()=>
    {   
        //debugger;
        props.store.dispatch(sendMessageCreator()); 
    }
    
    
    let onNewMessageChange=(e)=>
    {//debugger;
       let body=e.target.value;
       props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className={sDialogs.dialogs + ' ' + sDialogs.active}>
            <div className={sDialogs.dialogItems} >
                {DialogsElements}
            </div>
            <div className={sDialogs.messages}>
               <div>{MessageElements}</div>
               <div>
                   <div><textarea onChange={onNewMessageChange} value={newMessageBody} placeholder='Enter your message'/></div>
                   <div><button onClick={onSendMessageClick}>Send</button></div>
                </div> 


                
                
            </div>
        </div>
    );
}
export default Dialogs;