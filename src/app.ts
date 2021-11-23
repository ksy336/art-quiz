import "./styles.scss";
import Controls from "./control";
import Categories from "./pages/categories/categories";

export class App extends Controls {
  private header: Controls<HTMLElement>;

  constructor(parentNode:HTMLElement) {
    super(parentNode, "div", "main__wrapper");
    this.header = new Controls(this.node, "div",  "header", "");
    const container = new Container(this.node);
  }
}

export class Container extends Controls {
  constructor(parentNode:HTMLElement) {
    super(parentNode, "div", "container");
    this.startCycle();
  }
  startCycle() {
      const picturesQuiz = new PicturesQuiz(this.node);
      const artistsQuiz = new ArtistsQuiz(this.node);
      const settings = new Settings(this.node);
      picturesQuiz.onPlayToCatClick = () => {
        picturesQuiz.destroy();
        artistsQuiz.destroy();
        settings.destroy();
        const categories = new Categories(this.node);
        categories.onGoHomeClick = () => {
          categories.destroy();
          this.startCycle();
        }
      }
      artistsQuiz.onPlayClick = () => {
        artistsQuiz.destroy();
        picturesQuiz.destroy();
        settings.destroy();
        const categories = new Categories(this.node);
        categories.onGoHomeClick = () => {
          categories.destroy();
          this.startCycle();
        }
      }
      settings.onGoSettingsClick = () => {
        artistsQuiz.destroy();
        picturesQuiz.destroy();
        settings.onGoBackClick = () => {
          settings.destroy();
          this.startCycle();
        }
      }
    }
}

export class ArtistsQuiz extends Controls {
  private playButton: Controls<HTMLButtonElement>;
  public onPlayClick: () => void;

  constructor(parentNode:HTMLElement) {
    super(parentNode, "div", "main artists__block");
    this.playButton = new Controls(this.node, "button", "pic__button", "Artists Quiz");
    this.playButton.node.onclick = () => {
      this.onPlayClick();
    }
  }
}

export class PicturesQuiz extends Controls {
  private playButton: Controls<HTMLButtonElement>;
  public onPlayToCatClick: ()=>void;

  constructor(parentNode:HTMLElement) {
    super(parentNode, "div", " main pictures__block");
    this.playButton = new Controls(this.node, "button", "pic__button", "Pictures Quiz");
    this.playButton.node.onclick = () => {
      this.onPlayToCatClick();
    }
  }
}

export class Settings extends Controls {
  private goSettingsButton: Controls<HTMLButtonElement>;
  private goBackButton: Controls<HTMLButtonElement>;
  public onGoBackClick: () => void;
  public onGoSettingsClick: () => void;
  private goBack: HTMLElement;

  constructor(parentNode:HTMLElement) {
    super(parentNode, "div", "settings");
    this.goSettingsButton = new Controls(this.node, "button", "settings__button", "Settings");
    this.goBackButton = new Controls(this.node, "button", "settings__button-home","Home");
    const goBack = document.querySelector<HTMLElement>(".settings__button-home");
    const settingBack = document.querySelector<HTMLElement>(".settings__button");
    this.goSettingsButton.node.onclick = () => {
      this.onGoSettingsClick();
      if(goBack) {
        goBack.style.display = "flex";
      }
      if(settingBack) {
        settingBack.style.display = "none";
      }

    }
    this.goBackButton.node.onclick = () => {
      this.onGoBackClick();
    }
  }
}
