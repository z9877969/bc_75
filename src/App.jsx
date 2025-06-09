import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArtistsPage from './pages/ArtistsPage';
import ArtistsInfoPage from './pages/ArtistInfoPage';
import NotFoundPage from './pages/NotFoundPage';
import ArtistDescroption from './components/ArtistDescroption/ArtistDescroption';
import ArtistReviews from './components/ArtistReviews/ArtistReviews';
import ArtistBiography from './components/ArtistBiography/ArtistBiography';
import ArtistAlbums from './components/ArtistAlbums/ArtistAlbums';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/artists" element={<ArtistsPage />} />

        <Route path="/info/:artistId" element={<ArtistsInfoPage />}>
          <Route path="descr" element={<ArtistDescroption />} />
          <Route path="reviews" element={<ArtistReviews />} />
          <Route path="biography" element={<ArtistBiography />} />
          <Route path="albums" element={<ArtistAlbums />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;

// console.log(window.history);
