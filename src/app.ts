
import Controls from "./control";

export class App extends Controls {
  constructor(parentNode:HTMLElement) {
    super(parentNode, "div", "", "Home");
    this.startCycle();
  }

  startCycle() {
    const picturesQuiz = new PicturesQuiz(this.node);
    const artistsQuiz = new ArtistsQuiz(this.node);
    picturesQuiz.onPlayToCatClick = () => {
      picturesQuiz.destroy();
      artistsQuiz.destroy();
      const categories = new Categories(this.node);
      categories.onGoHomeClick = () => {
        categories.destroy();
        this.startCycle();
      }
    }
    artistsQuiz.onPlayClick = () => {
      artistsQuiz.destroy();
      picturesQuiz.destroy();
      const categories = new Categories(this.node);
      categories.onGoHomeClick = () => {
        categories.destroy();
        this.startCycle();
      }
    }
  }
}

export class ArtistsQuiz extends Controls {
  private playButton: Controls<HTMLButtonElement>;
  public onPlayClick: () => void;

  constructor(parentNode:HTMLElement) {
    super(parentNode, "div", "", "Artists Quiz");
    this.playButton = new Controls(this.node, "button", "", "Start Game");
    this.playButton.node.onclick = () => {
      this.onPlayClick();
    }
  }
}

export class PicturesQuiz extends Controls {
  private playButton: Controls<HTMLButtonElement>;
  public onPlayToCatClick: ()=>void;

  constructor(parentNode:HTMLElement) {
    super(parentNode, "div", "", "Pictures Quiz");
    this.playButton = new Controls(this.node, "button", "", "Start Game");
    this.playButton.node.onclick = () => {
      this.onPlayToCatClick();
    }
  }
}

export class Categories extends Controls {
  private goHomeButton: Controls<HTMLButtonElement>;
  public onGoHomeClick: () => void;
  private categ: any;

  constructor(parentNode:HTMLElement) {
    super(parentNode, "div", "categ", "Categories");
    this.animationPhoto()
    this.goHomeButton = new Controls(this.node, "button", "","Go Home");
    this.categ = new Controls(this.node, "div", "category__item", "");
    this.goHomeButton.node.onclick = () => {
      this.onGoHomeClick();
    }
  }

  private async animationPhoto() {
    try {
      const photos = "./assets/data.json";
      const response = await fetch(photos);
      console.log(response);
      const myData = await response.json();
      console.log(myData[0].author);
      const myAuthor = myData[0].author;

    } catch {

    }
  }

}


