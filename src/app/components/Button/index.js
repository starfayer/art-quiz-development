import './style.scss'
import ButtonElement from './button.html';
import Component from '@/app/core/component';
import htmlToElement from '@/utils/htmlToElement';

// class Button extends Component {
//   constructor(config) {
//     super(config)
//   }
// }

// const button = new Button({
//   scalable: true,
//   classSelector: 'footer-wrapper',
//   template: ButtonElement
// })

const button = htmlToElement(ButtonElement);

export default button;