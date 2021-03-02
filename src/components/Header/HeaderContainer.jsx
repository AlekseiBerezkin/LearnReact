
import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import {setAuthUserData} from '../../Redux/auth-reducer'
import { usersApi } from '../api/api';

class HeaderContainer extends React.Component {
    
    componentDidMount()
    {
       usersApi.getAuth().then((data)=>{ 
        //debugger   
        if(data.resultCode===0)
            {   
                let {id,email,login}=data.data;
                this.props.setAuthUserData(id,email,login)
               // debugger
            }
        })
    }
    
    render(){


        return <Header {...this.props}/>;
    }
    

}


const mapStateToProps=(state)=>({
isAuth:state.auth.isAuth,
login:state.auth.login
})


export default connect(mapStateToProps,{setAuthUserData}) (HeaderContainer);