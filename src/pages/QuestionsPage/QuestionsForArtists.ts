import Controls from "../../control";
import "./questionsForArtists.scss";

 class QuestionsForArtists extends Controls {
   private goCategoryButton: Controls<HTMLButtonElement>;
   public onGoCategoryClick: () => void;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", "questions-container");
    this.goCategoryButton = new Controls(this.node, "button", "button__categ", "Categories");
    this.goCategoryButton.node.onclick = () => {
      this.onGoCategoryClick();
    }
  }
}
export default QuestionsForArtists;