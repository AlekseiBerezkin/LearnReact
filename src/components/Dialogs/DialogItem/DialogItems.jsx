import { NavLink } from 'react-router-dom';
import sDialogs from './../Dialogs.module.css';

const DialogItems = (props) => {
    return (
        <div className={sDialogs.diaog+' '+sDialogs.active}>
            <NavLink to={"/dialogs/" + props.id} >
            <img src={props.img} alt="" className={sDialogs.ava}/>
            {props.name}
        </NavLink>
        </div>

    );
}


export default DialogItems;