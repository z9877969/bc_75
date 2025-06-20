import { useDispatch, useSelector } from 'react-redux';
import AuthNav from '../AuthNav/AuthNav';
import Container from '../Container/Container';
import UserNav from '../UserNav/UserNav';
import Button from '../Button/Button';

import s from './Header.module.css';
import { selectIsAuth } from '../../redux/auth/authSlice';
import { logoutUser } from '../../redux/auth/authOperations';

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <header className={s.header}>
      <Container className={s.container}>
        {isAuth ? <UserNav /> : <AuthNav />}
        {isAuth && (
          <Button size="medium" handleClick={handleLogout}>
            Logout
          </Button>
        )}
      </Container>
    </header>
  );
};

export default Header;
