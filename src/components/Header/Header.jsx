import { FiAlignJustify } from 'react-icons/fi';
import NavItem from '../NavItem/NavItem';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header
      style={{
        display: 'flex',
        width: '100vw',
        justifyContent: 'space-between',
        padding: '24px',
      }}
      className={styles.header}
    >
      <a
        href="#"
        // style={{
        //   color: 'red',
        //   fontSize: '24px',
        //   textTransform: 'unset',
        // }}
        className={styles.logo}
      >
        logo
      </a>

      <nav className={styles.nav}>
        <ul
          style={{
            display: 'flex',
            gap: '20px',
            listStyle: 'none',
          }}
        >
          <NavItem itemContent={'link'} itemNum={1} />
          <NavItem itemContent={'link'} itemNum={1} />
          <NavItem itemContent={'link'} itemNum={1} />
        </ul>
      </nav>
      <FiAlignJustify
        /* size={24} stroke="blue" */ className={styles.burgerIcon}
      />
    </header>
  );
};

export default Header;
