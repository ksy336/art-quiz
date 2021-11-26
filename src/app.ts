import './styles.scss';
import Controls from './control';
import { Container } from './pages/Main page/main-page';

export class App extends Controls {
  private header: Controls<HTMLElement>;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'main__wrapper');
    this.header = new Controls(this.node, 'div', 'header', '');
    const container = new Container(this.node);
  }
}
