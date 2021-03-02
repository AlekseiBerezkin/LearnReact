import React from 'react'
import { connect } from 'react-redux';
import { follow,setUsers,unfollow,setCurrentPage,setTotalCount,toogleIsFething } from '../../Redux/users-reducer';
import Users from './Users'
import axios from 'axios';
import Preloader from '../common/preloader/Preloader';

class UsersContainer extends React.Component{

    /*constructor(props)
    {
      super(props);
    }*/
  
    componentDidMount()
    {
        //debugger
        this.props.toogleIsFething(true)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currrentPage}&count=${this.props.pageSize}`,{
        withCredentials:true
      }).then((response)=>{ 
      this.props.setUsers(response.data.items);
      this.props.setTotalCount(response.data.totalCount);
      this.props.toogleIsFething(false)})
    }
      onPageChenged=(pageNumber)=>
    {
        this.props.toogleIsFething(true)
      this.props.setCurrentPage(pageNumber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,{
        withCredentials:true
      }).then((response)=>{ 
        this.props.setUsers(response.data.items);this.props.toogleIsFething(false)})
    }
     
  
  
  render() {
      
    
    //debugger
    return <> {this.props.isFething ? Preloader():null}

     <Users totalUsersCount={this.props.totalUsersCount} 
    pageSize={this.props.pageSize}
    currrentPage={this.props.currrentPage}
    onPageChenged={this.onPageChenged}
    users={this.props.users}
    follow={this.props.follow}
    unfollow={this.props.unfollow}
    />
    
    </>
  
    }
  }

let mapStateToProps=(state)=>
{
return{
    users:state.usersPage.users,
    pageSize:state.usersPage.pageSize,
    totalUsersCount:state.usersPage.totalUsersCount,
    currrentPage:state.usersPage.currrentPage,
    isFething:state.usersPage.isFething
}
}



export default connect(mapStateToProps,{follow,unfollow,setUsers,setCurrentPage,setTotalCount,toogleIsFething})(UsersContainer) ; 