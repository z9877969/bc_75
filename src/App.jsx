// import artistsData from './assets/artists.json';
import { useEffect, useState } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';
import SearchForm from './components/SearchForm/SearchForm';
import ArtistsList from './components/ArtistsList/ArtistsList';

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
        `https://sound-wave.b.goit.study/api/artists${
          search ? `?name=${search}` : ''
        }`
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
      <input
        type="text"
        onChange={debounce((e) => {
          getArtists(e.target.value);
        }, 300)}
      />
      {/* <SearchForm onSubmit={getArtists} /> */}
      {error ? (
        <ErrorMessage error={error} />
      ) : (
        <ArtistsList artistsList={artists} />
      )}
    </>
  );
}

export default App;
