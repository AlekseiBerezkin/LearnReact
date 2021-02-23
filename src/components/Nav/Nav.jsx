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
            <NavLink to="/users" activeClassName={classes.activeLink}>Users</NavLink>
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


    </div>
  );
}
export default Nav;