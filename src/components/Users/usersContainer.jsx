import React from 'react'
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toogleIsFollowingProgress,getUsers } from '../../Redux/users-reducer';
import Users from './Users'
import Preloader from '../common/preloader/Preloader';



class UsersContainer extends React.Component {



  componentDidMount() {
    this.props.getUsers(this.props.currrentPage,this.props.pageSize);
  }

  onPageChenged = (pageNumber) => {
    //debugger
    this.props.getUsers(pageNumber,this.props.pageSize);
  }



  render() {


    //debugger
    return <> {this.props.isFething ? Preloader() : null}

      <Users 
      totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currrentPage={this.props.currrentPage}
        onPageChenged={this.onPageChenged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        toogleIsFollowingProgress={this.props.toogleIsFollowingProgress}
        followingInProgress={this.props.followingInProgress}
      />

    </>

  }
}

let mapStateToProps = (state) => {
  //debugger
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currrentPage: state.usersPage.currrentPage,
    isFething: state.usersPage.isFething,
    followingInProgress:state.usersPage.followingInProgress
  }
}



export default connect(mapStateToProps, { follow, unfollow, setCurrentPage, toogleIsFollowingProgress, getUsers })(UsersContainer); 