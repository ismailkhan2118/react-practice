import { Link } from "react-router-dom";
import classes from './Header.module.css'

function Header() {
  return (
    <header className={classes.header}>
        <div className={classes.logo}>Reactive Meetups</div>
      <nav>
        <ul>
          <Link to='/'>
            <li>All Meetups</li>
          </Link>
          <Link to='/new'>
            <li>New Meetup</li>
          </Link>
          <Link to='/fav'>
            <li>Fav Meetups</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
