
import './App.css';
import Nav from './components/Nav/Nav';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { BrowserRouter, Route } from 'react-router-dom';
import Music from './components/Music/Music'
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import UsersContainer from './components/Users/usersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';



const App = () => {
  //debugger;
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />

        <div className='App-wrapper-content'>

        </div>

        <div className='App-wrapper-content'>
          <Route path='/profile/:userID?' render={()=><ProfileContainer/> } />
          <Route path='/dialogs' render={()=><DialogsContainer/>} />
          <Route path='/users' render={()=><UsersContainer/>} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
