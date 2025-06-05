// import artistsData from './assets/artists.json';
import { useEffect, useState } from 'react';
// import axios from 'axios';
// import debounce from 'lodash.debounce';
import SearchForm from './components/SearchForm/SearchForm';
import ArtistsList from './components/ArtistsList/ArtistsList';
import { getArtistsApi } from './services/api';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Button from './components/Button/Button';

// const useSTATE = (initialValue) => {
//   let value = initialValue;

//   const setValue = (data) => {
//     if (typeof data !== 'function') {
//       value = data;
//     } else {
//       value = data(value);
//     }
//   };

//   return [value, setValue];
// };

function App() {
  const [artists, setArtists] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [totalArtists, setTotalArtists] = useState(0);

  const handleSearch = (value) => {
    setSearch(value);
    setPage(1);
  };

  useEffect(() => {
    const getArtists = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getArtistsApi({ search, page });
        setArtists((prevArtists) =>
          page === 1 ? data.artists : [...prevArtists, ...data.artists]
        );
        setTotalArtists(data.totalArtists);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getArtists();
  }, [search, page /* artists */]);

  return (
    <>
      {isLoading && <Loader />}

      <SearchForm onSubmit={handleSearch} />
      {error ? (
        <ErrorMessage error={error} />
      ) : (
        <ArtistsList artistsList={artists} />
      )}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingBottom: '1rem',
        }}
      >
        {totalArtists > 0 && totalArtists > page * 6 && (
          <Button
            size="large"
            variant={'warn'}
            handleClick={() => setPage(page + 1)}
          >
            LoadMore
          </Button>
        )}
      </div>
    </>
  );
}

export default App;
