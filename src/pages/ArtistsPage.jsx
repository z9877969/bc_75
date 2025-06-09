import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container/Container';
import { getArtistsApi } from '../services/api';
import ArtistsList from '../components/ArtistsList/ArtistsList';

const ArtistsPage = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const getArtists = async () => {
      const data = await getArtistsApi();
      console.log('data :>> ', data);
      setArtists(data.artists);
    };

    getArtists();
  }, []);

  return (
    <Container>
      <h1>ArtistsPage</h1>
      <ArtistsList artistsList={artists} />
      {/* <ul>
        {artists.map((artist) => (
          <li key={artist._id}>
            <Link to={`/info/${artist._id}`}>{artist.strArtist}</Link>
          </li>
        ))}
      </ul> */}
    </Container>
  );
};

export default ArtistsPage;
