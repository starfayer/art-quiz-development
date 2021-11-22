import './style.scss';
import MainElement from './main.html';
import button from '../Button';
import Component from '@/app/core/component';

class Main extends Component {
  constructor(config) {
    super(config)
  }

  external() {
    return {
      '.main__button--artists': [button, artistBtn],
      '.main__button--pictures': [button, pictureBtn],
    }
  }

  events() {
    return {
      '.main__button click': this.delayClick
    }
  }

  delayClick(event) {
    event.target.style.background = '#fff';
    event.target.style.color = '#000';
    setTimeout(() => event.target.removeAttribute('style'), 1000)
  }
}

const artistBtn = 'Artist Quiz';
const pictureBtn = 'Pictures Quiz';

let main = new Main({
  classSelector: 'main-wrapper',
  template: MainElement,
})

export default main;