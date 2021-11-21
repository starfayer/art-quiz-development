import MainElement from './main.html';
import Component from '@/app/core/component';

class Main extends Component {
  constructor(config) {
    super(config)
  }
}

let main = new Main({
  classSelector: 'main-wrapper',
  template: MainElement
})

export default main;