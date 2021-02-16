
import sDialogs from './../Dialogs.module.css';



const Message = (props) => {
    return (
        <div className={sDialogs.dialog}>{props.message}</div>
    );
}






export default Message;