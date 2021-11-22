import changeElementText from "@/utils/changeElementText";
import htmlToElement from "@/utils/htmlToElement";

export default class Component {
  constructor(config) {
    this.classSelector = config.classSelector;
    this.template = config.template;
    this.el = document.querySelector(`.${this.classSelector}`) || null;
  }

  render() {
    if (!this.scalable) {
      if (!this.el)
        throw new Error(`Component with ${this.classSelector} wasn't found`);
      this.rewriteTag();
      console.log(this.el);
    }
    this._initExternal();
    this._initEvents();
  }

  _initEvents() {
    if (!this.events) return;

    let events = this.events();
    Object.keys(events).forEach(key => {
      let listener = key.split(' ');
      let classSelector = listener[0];
      let event = listener[1];
      
      let element = document.querySelectorAll(classSelector);
      if (element.length == 1)
        document.querySelector(classSelector).addEventListener(event, events[key].bind(this));
      else
        element.forEach(el => el.addEventListener(event, events[key].bind(this)));
    })
  }

  _initExternal() {
    if (!this.external) return;

    let externalObj = this.external();
    Object.keys(externalObj).forEach(data => {
      let selector = data;
      let element = externalObj[data][0];
      let text = externalObj[data][1];

      let newElement = changeElementText(element.cloneNode(true), text);
      newElement.id = selector.split('--').slice(-1);
      document.querySelector(selector).appendChild(newElement);
    })
  }

  rewriteTag() {
    document.querySelector(`.${this.classSelector}`).innerHTML = '';
    document.querySelector(`.${this.classSelector}`).appendChild(htmlToElement(this.template));
  }
}