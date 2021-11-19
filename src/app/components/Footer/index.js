import FooterElement from './index.html';
import Component from '@/app/core/component';

class Footer extends Component {
  constructor(config) {
    super(config)
  }
}

let footer = new Footer({
  classSelector: 'footer',
  template: FooterElement
})

export default footer;