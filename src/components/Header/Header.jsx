import { Link, NavLink } from 'react-router-dom';
import Container from '../Container/Container';
import s from './Header.module.css';
import clsx from 'clsx';

const Header = () => {
  return (
    <header className={s.header}>
      <Container className={s.container}>
        <nav className={s.nav}>
          <ul className={s.list}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => clsx(s.link, isActive && s.accent)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => clsx(s.link, isActive && s.accent)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/artists?page=1&limit=6"
                className={({ isActive }) => clsx(s.link, isActive && s.accent)}
              >
                Artists
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
