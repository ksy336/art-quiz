import Controls from "../../control";
import "./categories.scss";
import Cards from "./components/cards";

 class Categories extends Controls {
   private header:Controls<HTMLElement>;
   private goHomeButton: Controls<HTMLButtonElement>;
   public onGoHomeClick: () => void;
   private categ: any;

  constructor(parentNode:HTMLElement) {
    super(parentNode, "div", "categ");
    this.header = new Controls(this.node, "div", "header__cat","Categories")
    this.goHomeButton = new Controls(this.node, "button", "","Go Home");
    this.categ = new Controls(this.node, "div", "category__item", "");
    const cards = new Cards(this.node);
    this.goHomeButton.node.onclick = () => {
      this.onGoHomeClick();
    }
  }
}
export default Categories;