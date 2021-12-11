import Controls from '../../control';
import './categories.scss';
import CardsField from "./components/CategoriesForArtists";
import QuestionsForArtists from "../QuestionsPage/QuestionsForArtists";
import CategoriesForArtists from "./components/CategoriesForArtists";

class Categories extends Controls {
  private goHomeButton: Controls<HTMLButtonElement>;

  public onGoHomeClick: () => void;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', "categ" );
    this.goHomeButton = new Controls(this.node, 'button', '', 'Home');
    const categoriesForArtists = new CategoriesForArtists(this.node, "");
    this.goHomeButton.node.onclick = () => {
      this.onGoHomeClick();
    };
  }
}
export default Categories;
