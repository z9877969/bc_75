import axios from 'axios';

export const getArtistsApi = async ({
  search = '',
  page = 1,
  limit = 6,
} = {}) => {
  const { data } = await axios.get(
    `https://sound-wave.b.goit.study/api/artists`,
    {
      params: {
        ...(search && { name: search }),
        page,
        limit,
      },
    }
  );

  return data;
};
