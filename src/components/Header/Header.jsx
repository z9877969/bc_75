import NavItem from '../NavItem/NavItem';

const Header = () => {
  return (
    <header>
      logo
      <nav>
        <ul>
          <NavItem itemContent={'link'} itemNum={1} />
          <NavItem itemContent={'link'} itemNum={1} />
          <NavItem itemContent={'link'} itemNum={1} />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
