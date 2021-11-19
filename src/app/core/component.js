import htmlToElement from "@/utils/htmlToElement";

export default class Component {
  constructor(config) {
    this.classSelector = config.classSelector;
    this.template = config.template;
  }

  render() {
    console.log(document.querySelector(`.${this.classSelector}`))
    document.querySelector(`.${this.classSelector}`).append(htmlToElement(this.template))
  }
}