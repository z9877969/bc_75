import { Link } from "react-router-dom";

const ArtistsInfoNav = () => {
  return (
    <ul>
      <li>
        <Link to="biography">Biography</Link>
      </li>
      <li>
        <Link to="albums">Albums</Link>
      </li>
    </ul>
  );
};

export default ArtistsInfoNav;
