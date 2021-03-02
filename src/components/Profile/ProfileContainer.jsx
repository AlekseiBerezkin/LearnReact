import axios from 'axios';
import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setUserProfile } from '../../Redux/profile-reducer';
import { usersApi } from '../api/api';
import Profile from './Profile';


class ProfileContainer extends React.Component {

componentDidMount(){
          //debugger
          let userId=this.props.match.params.userID;
          if(!userId)
          {
            userId=2;
          }
          usersApi.getUserProfile(userId).then((data)=>{
            //debugger
            this.props.setUserProfile(data);})
}

render(){
  return(<div>
    <Profile {...this.props} profile={this.props.profile}/>
  </div>)
}

}

let mapStateToProps=(state)=>(
  {
    profile:state.profilePage.profile
  }
)

export default connect(mapStateToProps,{setUserProfile})(withRouter(ProfileContainer)) ;
