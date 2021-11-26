import Controls from '../../control';
import Categories from '../categories/categories';
import { ArtistsQuiz } from './components/ArtistQuiz';
import { PicturesQuiz } from './components/PicturesQuiz';
import { Settings } from '../Settings/settings';
import '../../styles.scss';
import PicCategories from "../categories/PicCategories";
import CardsField from "../categories/components/cards-field";
import QuestionsForArtists from "../QuestionsPage/QuestionsForArtists";

export class Container extends Controls {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'container');
    this.startCycle();
  }

  startCycle() {
    setTimeout(function(){
      document.body.classList.add("body__visible")
    },1200);
    const picturesQuiz = new PicturesQuiz(this.node);
    const artistsQuiz = new ArtistsQuiz(this.node);
    const settings = new Settings(this.node);
    picturesQuiz.onPlayToCatClick = () => {
      picturesQuiz.destroy();
      artistsQuiz.destroy();
      settings.destroy();
      const picCategories = new PicCategories(this.node);
      picCategories.onGoHomeClick = () => {
        picCategories.destroy();
        this.startCycle();
      };
    };
    artistsQuiz.onPlayClick = () => {
      artistsQuiz.destroy();
      picturesQuiz.destroy();
      settings.destroy();
      const categories = new Categories(this.node);
      categories.onGoHomeClick = () => {
        categories.destroy();
        this.startCycle();
      };

      // const cardsField = new CardsField(this.node);
      // cardsField.onGoToQuestionsClick = () => {
      //   const questionsField = new QuestionsForArtists(this.node);
      //   categories.destroy();
      //   cardsField.destroy();
      // }
    };
    settings.onGoSettingsClick = () => {
      artistsQuiz.destroy();
      picturesQuiz.destroy();
      settings.onGoBackClick = () => {
        settings.destroy();
        this.startCycle();
      };
    };
  }
}
