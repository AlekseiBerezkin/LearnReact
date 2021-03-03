
import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getProfile } from '../../Redux/profile-reducer';
import Profile from './Profile';


class ProfileContainer extends React.Component {

componentDidMount(){
          //debugger
          let userId=this.props.match.params.userID;
          if(!userId)
          {
            userId=2;
          }
          this.props.getProfile(userId);
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

export default connect(mapStateToProps,{getProfile})(withRouter(ProfileContainer)) ;
