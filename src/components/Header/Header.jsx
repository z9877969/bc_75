import NavItem from '../NavItem/NavItem';
import Container from '../Container/Container';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <Container className={s.container}>
        <nav className={s.nav}>
          <ul className={s.list}>
            <NavItem>Todo</NavItem>
            <NavItem>Artists</NavItem>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
