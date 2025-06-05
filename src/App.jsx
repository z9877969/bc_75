import ArtistsList from './components/ArtistsList/ArtistsList';
import artistsData from './assets/artists.json';
import SearchForm from './components/SearchForm/SearchForm';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        'https://sound-wave.b.goit.study/api/artists'
      );

      console.log(data);
    };
    fetchData();
  }, []);

  console.log('RENDER');

  return (
    <>
      <button
        type="button"
        onClick={async () => {
          const { data } = await axios.get(
            'https://sound-wave.b.goit.study/api/artists'
          );

          console.log('data :>> ', data);
        }}
      >
        Get Data
      </button>
      <ArtistsList artistsList={artistsData} />
      {/* <SearchForm />
       */}
    </>
  );
}

export default App;
