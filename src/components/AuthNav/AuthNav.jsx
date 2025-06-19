import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import s from './AuthNav.module.css';

const styleLink = ({ isActive }) => clsx(s.link, isActive && s.accent);

const AuthNav = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li>
          <NavLink to="/register" className={styleLink}>
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styleLink}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNav;
