import Controls from '../../control';
import './categories.scss';
import CardsForPicturesField from "./components/CardsForPicturesField";

class PicCategories extends Controls {
  private goHomeButton: Controls<HTMLButtonElement>;

  public onGoHomeClick: () => void;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', "categ" );
    this.goHomeButton = new Controls(this.node, 'button', '', 'Home');
    const cardsForPicturesField = new CardsForPicturesField(this.node);
    this.goHomeButton.node.onclick = () => {
      this.onGoHomeClick();
    };
  }
}
export default PicCategories;
