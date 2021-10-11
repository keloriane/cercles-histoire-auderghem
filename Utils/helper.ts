import router from 'next/router';

export const goTo = (url) => {
  return router.push(url);
};
