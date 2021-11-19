import MainElement from './index.html';
import Component from '@/app/core/component';

class Main extends Component {
  constructor(config) {
    super(config)
  }
}

let main = new Main({
  classSelector: 'main',
  template: MainElement
})

export default main;