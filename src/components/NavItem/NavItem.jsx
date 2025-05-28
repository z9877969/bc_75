import s from './NavItem.module.css';

const NavItem = ({ children }) => {
  return (
    <li className={s.item}>
      <a href="#" className={s.link}>
        {children}
      </a>
    </li>
  );
};

export default NavItem;
