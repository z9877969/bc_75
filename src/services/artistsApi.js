import axios from 'axios';

axios.defaults.baseURL = 'https://sound-wave.b.goit.study/api';

export const getArtistsApi = async ({
  search = '',
  page = 1,
  limit = 6,
} = {}) => {
  const { data } = await axios.get(`/artists`, {
    params: {
      ...(search && { name: search }),
      page,
      limit,
    },
  });

  return data;
};

export const getArtistsInfoApi = async (id) => {
  const { data } = await axios.get(`/artists/${id}/albums`);

  return data;
};
