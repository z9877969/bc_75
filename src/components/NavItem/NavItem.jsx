const NavItem = ({ itemContent, itemNum }) => {
  return (
    <li>
      <a href="#">
        {itemContent}-{itemNum}
      </a>
    </li>
  );
};

export default NavItem;
