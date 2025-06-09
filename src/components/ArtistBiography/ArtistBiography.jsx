import { useOutletContext } from 'react-router-dom';

const ArtistBiography = () => {
  const { biography } = useOutletContext();
  return (
    <>
      <h2>ArtistBiography</h2>
      <p>{biography}</p>
    </>
  );
};

export default ArtistBiography;
