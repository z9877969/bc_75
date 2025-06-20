import { useEffect } from 'react';
import { setToken, todoApi } from '../../services/todoApi';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction, selectRefreshToken } from '../../redux/auth/authSlice';
import { refreshToken as refreshTokenOperation } from '../../redux/auth/authOperations';

const RefreshTokenInterceptor = () => {
  const dispatch = useDispatch();

  //   const refreshToken = useSelector(selectRefreshToken);

  useEffect(() => {
    todoApi.interceptors.response.use(
      (response) => response, // Directly return successful responses.
      async (error) => {
        console.dir(error);
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          try {
            const { token } = await dispatch(refreshTokenOperation())
              .unwrap()
              .catch((err) => {
                throw err;
              });

            // refresh token request -> {token, refreshToken} -> store

            // const { data } = await todoApi.post(
            //   'auth/refresh',
            //   {},
            //   {
            //     headers: {
            //       Authorization: `Bearer ${refreshToken}`,
            //     },
            //   }
            // );

            originalRequest.headers.Authorization = `Bearer ${token}`;
            return todoApi(originalRequest); // Retry the original request with the new access token.
          } catch (refreshError) {
            console.log('interceptor logout');
            dispatch(logoutAction());
            return Promise.reject(refreshError);
          }
        }
        return Promise.reject(error); // For all other errors, return the error as is.
      }
    );
  }, [dispatch]);
  return null;
};

export default RefreshTokenInterceptor;
