// eslint-disable-next-line import/no-unresolved
import '@/styles/style.scss';

import Module from './app/core/module';
import { components, routes } from './app/components/';
import render from './app/core/render';

class AppModule extends Module {
  constructor(config) {
    super(config);
  }
}

const appModule = new AppModule({
  components: components,
  routes: routes
  // pages: pages,
})

render(appModule);