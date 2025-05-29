import { FaOpencart } from 'react-icons/fa';
import NavItem from '../NavItem/NavItem';
import Container from '../Container/Container';
import s from './Header.module.css';

const Header = ({ changePageType, openCart }) => {
  return (
    <header className={s.header}>
      <Container className={s.container}>
        <a href="#" className={s.logo}>
          <img
            className={s.logoImg}
            src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_items_boosted&w=740"
            alt="logo image"
          />
        </a>
        <nav className={s.nav}>
          <ul className={s.list}>
            <NavItem handleClick={() => changePageType('counter')}>
              Counter
            </NavItem>
            <NavItem handleClick={() => changePageType('products')}>
              Products
            </NavItem>
          </ul>
        </nav>
        <button
          type="button"
          className={s.cartBtn}
          onClick={() => openCart(true)}
        >
          <FaOpencart className={s.cartIcon} />
        </button>
      </Container>
    </header>
  );
};

export default Header;
