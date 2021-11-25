import Component from '@/app/core/component';
import MenuElement from './index.html';

class Menu extends Component {
  constructor(config) {
    super(config)
  }
}

const menu = new Menu({
  classSelector: 'main',
  template: MenuElement
})

export default menu;