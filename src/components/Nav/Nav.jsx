import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';
const Nav = (props) => {//debugger;
  //let SidebarElement = props.posts.map(p=> <Post message={p.message}  countLike={p.like} />);
  return (
    <div className={classes.nav}>
      <nav  >

        <div className={classes.item}>

          <div >

            <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
          </div>

          <div>
            <NavLink to="/dialogs" activeClassName={classes.activeLink}>Message</NavLink>
          </div>

          <div>
            <NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink>
          </div>

          <div>
            <NavLink to="/music" activeClassName={classes.activeLink}>Music</NavLink>
          </div>

          <div>
            <NavLink to="/settings" activeClassName={classes.activeLink}>Settings</NavLink>
          </div>
        </div>
      </nav>
      <div>

      </div>
      <div className={classes.sidebar}>
        <div className={classes.sidebarElement}>
          <img src={props.sidebar[0].image} alt="" className={classes.ava} />
         <p>{props.sidebar[0].name}</p> 
        </div>
        <div className={classes.sidebarElement}>
          <img src={props.sidebar[1].image} alt="" className={classes.ava} />
         <p>{props.sidebar[1].name}</p> 
        </div>
        <div className={classes.sidebarElement}>
          <img src={props.sidebar[2].image} alt="" className={classes.ava} />
         <p>{props.sidebar[2].name}</p> 
        </div>

      </div>

    </div>
  );
}
export default Nav;