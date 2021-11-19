export default class Module {
  constructor(config) {
    this.components = config.components;
    this.pages = config.pages;
  }

  renderApp() {
    this.connect();
    console.log(this.components);
  }

  connect() {
    this.components.forEach(c => c.render())
  }
}