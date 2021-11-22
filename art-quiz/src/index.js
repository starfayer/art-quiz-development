// eslint-disable-next-line import/no-unresolved
import '@/styles/style.scss';

import Module from './app/core/module';
import components from './app/components/';
import routes from './app/pages/routes';
import render from './app/core/render';

class AppModule extends Module {
  constructor(config) {
    super(config);
  }
}

const appModule = new AppModule({
  components,
  routes
  // pages: pages,
})

render(appModule);