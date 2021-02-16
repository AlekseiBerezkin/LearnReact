import { NavLink } from 'react-router-dom';
import sDialogs from './Dialogs.module.css';
import DialogItems from './DialogItem/DialogItems'
import Message from './Messages/Messages'


const Dialogs = (props) => {
    

    let DialogsElements = props.dialogs.map(d => <DialogItems name={d.name} id={d.id} img={d.image}/>);
    let MessageElements = props.message.map(d => <Message message={d.message} />);
    return (
        <div className={sDialogs.dialogs + ' ' + sDialogs.active}>
            <div className={sDialogs.dialogItems} >
                {DialogsElements}
            </div>
            <div className={sDialogs.messages}>
                {MessageElements}
            </div>
        </div>
    );
}
export default Dialogs;