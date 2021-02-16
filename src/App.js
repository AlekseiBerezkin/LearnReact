import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import Music from './components/Music/Music'
import News from './components/News/News'
import Settings from './components/Settings/Settings'


const App = (props) => {
  //debugger;
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav sidebar={props.state.sidebarPage.sidebar}/>

        <div className='App-wrapper-content'>

        </div>

        <div className='App-wrapper-content'>
          <Route path='/profile' render={()=><Profile posts={props.state.profilePage.postsData} />} />
          <Route path='/dialogs' render={()=><Dialogs message={props.state.dialogPage.messageData} dialogs={props.state.dialogPage.dialogsData}/>} />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />

        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
