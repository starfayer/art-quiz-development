import htmlToElement from "@/utils/htmlToElement";

export default class Component {
  constructor(config) {
    this.classSelector = config.classSelector;
    this.template = config.template;
    this.el = document.querySelector(`.${this.classSelector}`) || null;
  }

  render() {
    if (!this.el)
      throw new Error(`Component with ${this.classSelector} wasn't found`);
    this.rewriteTag();
    console.log(this.el)
    this._initEvents();
  }

  _initEvents() {
    if (!this.events) return

    let events = this.events();
    Object.keys(events).forEach(key => {
      let listener = key.split(' ');
      let classSelector = listener[0];
      let event = listener[1];
      this.el.querySelector(classSelector).addEventListener(event, events[key].bind(this));
    })

  }
  rewriteTag() {
    document.querySelector(`.${this.classSelector}`).innerHTML = '';
    document.querySelector(`.${this.classSelector}`).appendChild(htmlToElement(this.template));
  }
}