import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import Container from '../Container/Container';
import s from './Header.module.css';

const styleLink = ({ isActive }) => clsx(s.link, isActive && s.accent);

const Header = () => {
  return (
    <header className={s.header}>
      <Container className={s.container}>
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
      </Container>
    </header>
  );
};

export default Header;
