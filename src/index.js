// eslint-disable-next-line import/no-unresolved
import '@/styles/style.scss';

import { Module, render } from '@/app/core/index';
import { pages } from './app/pages/index';
import components from './app/components';
// import { routes } from './app/pages/routes';

class AppModule extends Module {
  constructor(config) {
    super(config);
  }
}

const appModule = new AppModule({
  components: components,
  pages: pages,
  // routes
})

render(appModule);