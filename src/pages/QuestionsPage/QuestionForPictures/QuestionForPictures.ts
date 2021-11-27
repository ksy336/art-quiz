
import "./questionsForPictures.scss";
import Controls from "../../../control";

class QuestionsForPictures extends Controls {
  private goCategoryButton: Controls<HTMLButtonElement>;
  public onGoCategoryClick: () => void;
  private question: Controls<HTMLElement>;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", "questions-container");
    this.goCategoryButton = new Controls(this.node, "button", "button__categ", "Categories");
    this.question = new Controls(this.node, "h3", "question", "Кто автор данной картины?");
    this.goCategoryButton.node.onclick = () => {
      this.onGoCategoryClick();
    }
  }
}
export default QuestionsForPictures;