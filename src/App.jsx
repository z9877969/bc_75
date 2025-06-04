import ArtistsList from './components/ArtistsList/ArtistsList';
import artistsData from './assets/artists.json';
import SearchForm from './components/SearchForm/SearchForm';

function App() {
  return (
    <>
      <SearchForm />
      <ArtistsList artistsList={artistsData} />
    </>
  );
}

export default App;
