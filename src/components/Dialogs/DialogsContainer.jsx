import Dialogs from './Dialogs'
import DialogItems from './DialogItem/DialogItems'
import Message from './Messages/Messages'
import {updateNewMessageBodyCreator,sendMessageCreator} from '../../Redux/dialogs-reducer'

import { connect } from 'react-redux'





let mapStateToProps=(state)=>{
return{
    dialogsPage:state.dialogPage
}
};
let mapDispatchToprops=(dispatch)=>{
    return{
        updateNewMessageBody:(body)=>{dispatch(updateNewMessageBodyCreator(body) ); },
        sendMessage:()=>{dispatch(sendMessageCreator());}
    }
};

const DialogsContainer=connect(mapStateToProps,mapDispatchToprops)(Dialogs);

export default DialogsContainer;