import { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import ArtistsList from '../components/ArtistsList/ArtistsList';
import SearchForm from '../components/SearchForm/SearchForm';
import { getArtistsApi } from '../services/api';

const ArtistsPage = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const getArtists = async () => {
      const data = await getArtistsApi();
      setArtists(data.artists);
    };

    getArtists();
  }, []);

  return (
    <Container>
      <SearchForm />
      <ArtistsList artistsList={artists} />
    </Container>
  );
};

export default ArtistsPage;
