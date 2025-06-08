import { NavLink } from 'react-router-dom';
import Container from '../Container/Container';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <Container className={s.container}>
        <nav className={s.nav}>
          <ul className={s.list}>
            <a className={s.link} href="#">
              Home
            </a>
            <a className={s.link} href="#">
              Artists
            </a>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
