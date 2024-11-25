import { registerRoute, Route } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';
import { Workbox } from 'workbox-window';

// const swRegister = async () => {
//   if (!('serviceWorker' in navigator)) {
//     console.log('Service Worker not supported in the browser');
//     return;
//   }

//   const wb = new Workbox('./sw.bundle.js');

//   try {
//     await wb.register();
//     console.log('Service worker registered');
//   } catch (error) {
//     console.log('Failed to register service worker', error);
//   }
// };

const swRegister = async () => {
  registerRoute(
    new Route(
      ({ url }) => url.href.startsWith('https://github-leaderboard-api.vercel.app/')
      , new StaleWhileRevalidate({ cacheName: 'github-leaderboard-api' })
    )
  );
  registerRoute(
    new Route(
      ({ url }) => url.href.startsWith('https://avatars.githubusercontent.com/u/')
      , new StaleWhileRevalidate({ cacheName: 'github-users-image' })
    ));

  registerRoute(
    new Route(
      ({ url }) => url.href.startsWith('https://api.github.com')
      , new StaleWhileRevalidate({ cacheName: 'github-api' })));
};


export default swRegister;
