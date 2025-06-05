import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import SearchForm from '../SearchForm/SearchForm';
import ArtistsList from '../ArtistsList/ArtistsList';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { getArtistsApi } from '../../services/api';

const Artists = () => {
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
};

export default Artists;
