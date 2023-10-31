import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: '@single-spa/welcome',
  app: () =>
    System.import<LifeCycles>(
      'https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js'
    ),
  activeWhen: (location) => location.pathname === '/',
});

registerApplication({
  name: '@rob/todo',
  app: () => System.import<LifeCycles>('@rob/todo'),
  activeWhen: ['/todo']
});

registerApplication({
  name: '@rob/navbar',
  app: () => System.import<LifeCycles>('@rob/navbar'),
  activeWhen: ['/'],
});

registerApplication({
  name: '@rob/info-app',
  app: () => System.import<LifeCycles>('@rob/info-app'),
  activeWhen: ['/info'],
});

start({
  urlRerouteOnly: true,
});
