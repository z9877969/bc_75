import { useEffect, useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import Container from '../components/Container/Container';
import { getArtistsInfoApi } from '../services/api';
import ArtistInfo from '../components/ArtistInfo/ArtistInfo';
import ArtistsInfoNav from '../components/ArtistsInfoNav/ArtistsInfoNav';
import Button from '../components/Button/Button';

const ArtistsInfoPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { artistId } = useParams();

  const [artistInfo, setArtistInfo] = useState(null);

  useEffect(() => {
    const getArtistsInfo = async () => {
      try {
        const artistData = await getArtistsInfoApi(artistId);
        setArtistInfo(artistData);
      } catch (error) {
        console.log(error);
        navigate('/notfound');
      }
    };

    getArtistsInfo();
  }, [artistId]);

  return (
    <Container>
      <Button
        size="medium"
        variant="warn"
        handleClick={() => {
          navigate(location.state);
        }}
      >
        GoBack
      </Button>
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
