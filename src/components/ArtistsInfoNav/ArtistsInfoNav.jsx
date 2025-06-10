import { Link, useLocation } from 'react-router-dom';

const ArtistsInfoNav = () => {
  const location = useLocation();

  console.log('location.state :>> ', location.state);
  return (
    <ul>
      <li>
        <Link to="biography" state={location.state}>
          Biography
        </Link>
      </li>
      <li>
        <Link to="albums" state={location.state}>
          Albums
        </Link>
      </li>
    </ul>
  );
};

export default ArtistsInfoNav;
