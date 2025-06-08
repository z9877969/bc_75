import s from './ArtistsList.module.css';
import artistsListJson from '../../assets/artists.json';

const ArtistsList = ({ artistsList = artistsListJson }) => {
  return (
    <ul className={s.container}>
      {artistsList.map(({ strArtist, strArtistThumb, _id }) => (
        <li key={_id} className={s.item}>
          <img
            src={strArtistThumb}
            alt={`image of ${strArtist}`}
            height="350"
          />
          <p className={s.name}>{strArtist}</p>
        </li>
      ))}
    </ul>
  );
};

export default ArtistsList;
