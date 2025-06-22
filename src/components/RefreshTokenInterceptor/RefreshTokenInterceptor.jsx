import { useEffect } from 'react';
import { todoApi } from '../../services/todoApi';
import { useDispatch, useSelector } from 'react-redux';
import { selectRefreshToken } from '../../redux/auth/authSlice';
import { refreshToken as refreshTokenOperation } from '../../redux/auth/authOperations';

const RefreshTokenInterceptor = () => {
  const dispatch = useDispatch();
  const refreshToken = useSelector(selectRefreshToken);

  useEffect(() => {
    todoApi.interceptors.response.use(
      (response) => response,
      async (error) => {
        console.dir(error);
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          try {
            if (originalRequest.url === 'auth/refresh') {
              throw error;
            }
            const { token } = await dispatch(refreshTokenOperation()).unwrap();

            originalRequest.headers.Authorization = `Bearer ${token}`;
            return todoApi(originalRequest);
          } catch (refreshError) {
            return Promise.reject(refreshError);
          }
        }
        return Promise.reject(error); // For all other errors, return the error as is.
      }
    );
  }, [dispatch, refreshToken]);
  return null;
};

export default RefreshTokenInterceptor;
