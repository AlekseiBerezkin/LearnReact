import React from 'react'
import { connect } from 'react-redux';
import { followAC,setUsercAC,unfollowAC,setCurrentPageAC,setTotalCountAC } from '../../Redux/users-reducer';
import Users from './Users';

let mapStateToProps=(state)=>
{
return{
    users:state.usersPage.users,
    pageSize:state.usersPage.pageSize,
    totalUsersCount:state.usersPage.totalUsersCount,
    currrentPage:state.usersPage.currrentPage
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
        },
        setCurrentPage:(pageNumber)=>{
            dispatch(setCurrentPageAC(pageNumber))  
        },
        setTotalCount:(totalCount)=>
        {dispatch(setTotalCountAC(totalCount))}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Users) ;