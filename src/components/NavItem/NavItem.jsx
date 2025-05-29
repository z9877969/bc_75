import s from './NavItem.module.css';

const NavItem = ({ children, handleClick }) => {
  return (
    <li className={s.item}>
      <a href="#" className={s.link} onClick={handleClick}>
        {children}
      </a>
    </li>
  );
};

export default NavItem;
