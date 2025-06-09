import s from './ArtistInfo.module.css';

const ArtistInfo = ({ artistInfo }) => {
  return (
    <div className={s.wrapper}>
      <img
        src={artistInfo.strArtistThumb}
        alt={artistInfo.strArtist + ' image'}
        className={s.image}
      />
      <h1 className={s.title}>{artistInfo.strArtist}</h1>
    </div>
  );
};

export default ArtistInfo;
