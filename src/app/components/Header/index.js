import HeaderElement from './index.html';
import Component from '@/app/core/component';

class Header extends Component {
  constructor(config) {
    super(config)
  }
}

let header = new Header({
  classSelector: 'header',
  template: HeaderElement
})

export default header;