import './style.scss'
import FooterElement from './footer.html';
import Component from '@/app/core/component';

class Footer extends Component {
  constructor(config) {
    super(config)
  }
}

const footer = new Footer({
  classSelector: 'footer-wrapper',
  template: FooterElement
})

export default footer;