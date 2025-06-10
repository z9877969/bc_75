import { Link, useLocation } from 'react-router-dom';
import s from './ArtistsList.module.css';

const ArtistsList = ({ artistsList = [] }) => {
  const curLocation = useLocation();
  return (
    <ul className={s.container}>
      {artistsList.map(({ strArtist, strArtistThumb, _id }) => (
        <li key={_id} className={s.item}>
          <Link to={`/info/${_id}`} state={curLocation}>
            <img
              src={strArtistThumb}
              alt={`image of ${strArtist}`}
              height="350"
            />
            <p className={s.name}>{strArtist}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ArtistsList;
