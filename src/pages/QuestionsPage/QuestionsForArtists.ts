import Controls from "../../control";
import "./questionsForArtists.scss";
import DataHolder from "../../dataHolder";
import CardsField, {myImage, pict, attribute, n, } from "../categories/components/cards-field";

 class QuestionsForArtists extends Controls {
   private goCategoryButton: Controls<HTMLButtonElement>;
   public onGoCategoryClick: () => void;
   private question: Controls<HTMLElement>;
   // private image: Controls<HTMLElement>;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", "questions-container");
    this.goCategoryButton = new Controls(this.node, "button", "button__categ", "Categories");
    this.question = new Controls(this.node, "h3", "question", "Кто автор данной картины?");
    // this.image = new Controls(this.node, "img", "pictures__forquestions", "" );
    const dataHolder = new DataHolder();
    dataHolder.build();
    this.goCategoryButton.node.onclick = () => {
      this.onGoCategoryClick();
    }
  }
  async getImages() {
    try {
      const photos = './assets/data.json';
      const response = await fetch(photos);
      // console.log(response);
      const myPicture = await response.json();
      return myPicture;
    } catch (error) {
      if (error) {
        console.log('Error');
      }
    }
  }

}
export default QuestionsForArtists;