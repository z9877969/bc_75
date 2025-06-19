import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import s from './UserNav.module.css';

const styleLink = ({ isActive }) => clsx(s.link, isActive && s.accent);

const UserNav = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li>
          <NavLink to="/counter" className={styleLink}>
            Counter
          </NavLink>
        </li>
        <li>
          <NavLink to="/todo" className={styleLink}>
            Todo
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default UserNav;
