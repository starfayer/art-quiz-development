import getCurrentUrl from "@/utils/getUrl";
import htmlToElement from "@/utils/htmlToElement";

export default class Module {
  constructor(config) {
    this.components = config.components;
    this.pages = config.pages;
    this.routes = config.routes;
  }

  renderApp() {
    console.log(this.components);
    this.connect();
  }

  connect() {
    this.components.forEach(c => c.render())
    // if (this.routes) this.renderRoutes();
  }

  renderRoutes() {
    window.addEventListener('hashchange', this.changeRoute.bind(this));
    this.changeRoute();
  }

  changeRoute() {
    let url = getCurrentUrl();
    let route = this.routes.find(hash => hash.path.slice(1) === url);
    if (route) route.component.render();
    console.log(route)
  }
}