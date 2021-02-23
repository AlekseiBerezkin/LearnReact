import React from 'react'
import { connect } from 'react-redux';
import { followAC,setUsercAC,unfollowAC } from '../../Redux/users-reducer';
import Users from './Users';

let mapStateToProps=(state)=>
{
return{
    users:state.usersPage.users
}
}

let mapDispatchToProps=(dispatch)=>
{
    return{
        follow:(userId)=>{
            dispatch(followAC(userId))
        },
        unfollow:(userId)=>{
            dispatch(unfollowAC(userId))
        },
        setUsers:(users)=>{
            dispatch(setUsercAC(users))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Users) ;