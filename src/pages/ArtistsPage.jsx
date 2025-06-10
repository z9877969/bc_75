import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Container from '../components/Container/Container';
import ArtistsList from '../components/ArtistsList/ArtistsList';
import SearchForm from '../components/SearchForm/SearchForm';
import { getArtistsApi } from '../services/api';
import Button from '../components/Button/Button';

// const searchParams = new URLSearchParams()

const ArtistsPage = () => {
  const [artists, setArtists] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page'); // string "2"
  const limit = searchParams.get('limit');
  const search = searchParams.get('search');

  const updateSearchParams = (key, value) => {
    const searchParamsInstance = new URLSearchParams(searchParams);

    searchParamsInstance.set(key, value);

    setSearchParams(searchParamsInstance);
  };

  useEffect(() => {
    const getArtists = async () => {
      const data = await getArtistsApi({ page, limit, search });
      setArtists(data.artists);
    };

    getArtists();
  }, [page, limit, search]);

  return (
    <Container>
      <SearchForm onSubmit={updateSearchParams} />
      <label htmlFor="">
        Per page:
        <select
          name="limit"
          value={limit}
          onChange={(e) => {
            updateSearchParams('limit', e.target.value);
          }}
        >
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="10">10</option>
        </select>
      </label>
      <ArtistsList artistsList={artists} />
      <Button
        type="button"
        size="large"
        handleClick={() => {
          updateSearchParams('page', Number(page) + 1); // 2 + 1 -> 3
        }}
      >
        LoadMore
      </Button>
    </Container>
  );
};

export default ArtistsPage;
