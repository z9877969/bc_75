import { useSelector } from 'react-redux';
import AuthNav from '../AuthNav/AuthNav';
import Container from '../Container/Container';
import UserNav from '../UserNav/UserNav';
import s from './Header.module.css';
import { selectIsAuth } from '../../redux/auth/authSlice';

const Header = () => {
  const isAuth = useSelector(selectIsAuth);

  return (
    <header className={s.header}>
      <Container className={s.container}>
        {isAuth ? <UserNav /> : <AuthNav />}
      </Container>
    </header>
  );
};

export default Header;
