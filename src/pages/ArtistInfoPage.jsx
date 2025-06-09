import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import Container from '../components/Container/Container';
import { getArtistsInfoApi } from '../services/api';
import ArtistInfo from '../components/ArtistInfo/ArtistInfo';

const ArtistsInfoPage = () => {
  const { artistId } = useParams();

  const [artistInfo, setArtistInfo] = useState(null);

  useEffect(() => {
    const getArtistsInfo = async () => {
      const artistData = await getArtistsInfoApi(artistId);
      setArtistInfo(artistData);
    };

    getArtistsInfo();
  }, [artistId]);

  return (
    <Container>
      {artistInfo && <ArtistInfo artistInfo={artistInfo} />}
      <Link to="descr">Description</Link>
      <Link to="reviews">Reviews</Link>
      <Link to="biography">Biography</Link>
      <Link to="albums">Albums</Link>
      <Outlet
        context={{
          biography: artistInfo?.strBiographyEN,
          albums: artistInfo?.albumsList,
        }}
      />
      {/* <h2>Descr component</h2> */}
    </Container>
  );
};

export default ArtistsInfoPage;
