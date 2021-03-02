import React from 'react'
import { connect } from 'react-redux';
import { follow, setUsers, unfollow, setCurrentPage, setTotalCount, toogleIsFething,toogleIsFollowingProgress } from '../../Redux/users-reducer';
import Users from './Users'
import Preloader from '../common/preloader/Preloader';
import { usersApi } from '../api/api';


class UsersContainer extends React.Component {



  componentDidMount() {
    this.props.toogleIsFething(true)

    usersApi.getUsers(this.props.currrentPage, this.props.pageSize).then((data) => {
      this.props.setUsers(data.items);
      this.props.setTotalCount(data.totalCount);
      this.props.toogleIsFething(false)
    })




  }

  onPageChenged = (pageNumber) => {
    this.props.toogleIsFething(true)
    this.props.setCurrentPage(pageNumber);
    usersApi.getUsers(pageNumber, this.props.pageSize).then((data) => {
    this.props.setUsers(data.items); this.props.toogleIsFething(false)
    })
  }



  render() {


    //debugger
    return <> {this.props.isFething ? Preloader() : null}

      <Users totalUsersCount={this.props.totalUsersCount}
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



export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalCount, toogleIsFething,toogleIsFollowingProgress })(UsersContainer); 