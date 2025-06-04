import s from './ArtistsList.module.css';

const ArtistsList = ({ artistsList = [] }) => {
  return (
    <ul className={s.container}>
      {artistsList.map(({ strArtist, strBiographyEN, strArtistThumb, _id }) => (
        <li key={_id} className={s.item}>
          <img
            src={strArtistThumb}
            alt={`image of ${strArtist}`}
            height="350"
          />
          <p className={s.name}>{strArtist}</p>
          <p className={s.descr}>{strBiographyEN}</p>
        </li>
      ))}
    </ul>
  );
};

export default ArtistsList;
