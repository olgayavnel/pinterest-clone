import unsplash from '../api/unsplash';

export const getImages = (requestText: string) => {
  return unsplash.get('https://api.unsplash.com/search/photos', {
    params: {
      query: requestText,
    },
  });
};
