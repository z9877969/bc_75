import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import Container from '../components/Container/Container';
import { getArtistsInfoApi } from '../services/api';
import ArtistInfo from '../components/ArtistInfo/ArtistInfo';
import ArtistsInfoNav from '../components/ArtistsInfoNav/ArtistsInfoNav';

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
      <ArtistsInfoNav />
      <Outlet
        context={{
          biography: artistInfo?.strBiographyEN,
          albums: artistInfo?.albumsList,
        }}
      />
    </Container>
  );
};

export default ArtistsInfoPage;
