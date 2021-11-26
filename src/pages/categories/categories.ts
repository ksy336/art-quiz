import Controls from '../../control';
import './categories.scss';
import CardsField from "./components/cards-field";
import QuestionsForArtists from "../QuestionsPage/QuestionsForArtists";

class Categories extends Controls {
  private header: Controls<HTMLElement>;

  private goHomeButton: Controls<HTMLButtonElement>;

  public onGoHomeClick: () => void;

  private categ: any;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', "categ" );
    // this.categ = new Controls(this.node, 'div', "header__cat", 'Categories');
    this.goHomeButton = new Controls(this.node, 'button', '', 'Home');
    const cardsField = new CardsField(this.node);
    // const questionsField = new QuestionsForArtists(this.node);
    // questionsField.onGoCategoryClick = () => {
    //   questionsField.destroy();
    //   const categories = new Categories(this.node);
    // }
    this.goHomeButton.node.onclick = () => {
      this.onGoHomeClick();
    };
  }
}
export default Categories;
