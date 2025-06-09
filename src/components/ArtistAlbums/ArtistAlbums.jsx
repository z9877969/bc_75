import { useOutletContext } from 'react-router-dom';

const ArtistAlbums = () => {
  const { albums } = useOutletContext();

  return (
    albums.length > 0 && (
      <ul>
        {albums.map((album) => (
          <li key={album._id}>{album.strAlbum}</li>
        ))}
      </ul>
    )
  );
};

export default ArtistAlbums;
