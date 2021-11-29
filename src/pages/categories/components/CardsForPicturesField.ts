import Controls from '../../../control';
import './cards-field.scss';
import QuestionsForArtists from "../../QuestionsPage/QuestionsForArtists";
import {itemsForPictures} from "../../../utils";

class CardsForPicturesField extends Controls {
  private categ: Controls<HTMLElement>;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'cards-field', "Categories");
    this.node.innerHTML = `
    <div class="header__cat">Categories</div>
        ${itemsForPictures.map((item) => `
            <div class="card" data-set="${item.number}">
                <div class="img__name">${item.name}
                    <div class="item-total">${item.total}</div>
                 </div>
                <img class="img__photo" src="img/${item.img}.jpg" alt="categ-photo">
            </div>
        `)}
    `
    const questionsButton = Array.from(document.querySelectorAll(".card"));
    const cardsF = document.querySelector<HTMLElement>(".cards-field");
    if (questionsButton) {
      questionsButton.forEach((card) => {
        card.addEventListener("click", () => {
          if (cardsF) {
            cardsF.remove();
          }
          const questionsField = new QuestionsForArtists(parentNode);
          const attribute = card.getAttribute("data-set");
          const n = `${attribute}`;
          console.log(n);
          questionsField.onGoCategoryClick = () => {
            questionsField.destroy();
            const cardsField = new CardsForPicturesField(parentNode);
          }
        })
      })
    }
  }
}
export default CardsForPicturesField;