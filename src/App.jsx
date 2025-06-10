import { lazy, Suspense } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';
// import ArtistsPage from './pages/ArtistsPage';
// import ArtistInfoPage from './pages/ArtistInfoPage';
import NotFoundPage from './pages/NotFoundPage';
import ArtistBiography from './components/ArtistBiography/ArtistBiography';
import ArtistAlbums from './components/ArtistAlbums/ArtistAlbums';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ArtistsPage = lazy(() => import('./pages/ArtistsPage'));
const ArtistInfoPage = lazy(() => import('./pages/ArtistInfoPage'));
// const ArtistAlbums = lazy(() =>
//   import('./components/ArtistAlbums/ArtistAlbums')
// );
// const ArtistBiography = lazy(() =>
//   import('./components/ArtistBiography/ArtistBiography')
// );

const SharedLayot = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayot />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/artists" element={<ArtistsPage />} />

          <Route path="/info/:artistId" element={<ArtistInfoPage />}>
            <Route path="biography" element={<ArtistBiography />} />
            <Route path="albums" element={<ArtistAlbums />} />
          </Route>
          <Route path="/notfound" element={<NotFoundPage />} />

          <Route path="*" element={<Navigate to="/notfound" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

// console.log(window.history);
