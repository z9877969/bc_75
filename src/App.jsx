import ArtistsList from './components/ArtistsList/ArtistsList';
// import artistsData from './assets/artists.json';
import SearchForm from './components/SearchForm/SearchForm';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Loader = () => {
  return <h1>Loading...</h1>;
};

const ErrorMessage = ({ error }) => {
  return <h2>{error}</h2>;
};

function App() {
  const [artists, setArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getArtists = async (search) => {
    try {
      setIsLoading(true);
      setError(null);
      const { data } = await axios.get(
        `https://sound-wave.b.goit.study/api/artists?name=${search}`
      );

      setArtists(data.artists);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const { data } = await axios.get(
          'https://sound-wave.b.goit.study/api/artists'
        );

        setArtists(data.artists);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log('RENDER');

  return (
    <>
      {isLoading && <Loader />}
      <SearchForm onSubmit={getArtists} />
      {error ? (
        <ErrorMessage error={error} />
      ) : (
        <ArtistsList artistsList={artists} />
      )}
    </>
  );
}

export default App;
