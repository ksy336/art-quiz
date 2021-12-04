import Controls from '../../../control';
import './cards-field.scss';
import QuestionsForArtists from "../../QuestionsPage/QuestionsForArtists";
import Categories from "../categories";
import {items} from "../../../utils";


export let attribute: any;
export let n: number;
export let pict : number;
export let myImage: string;

class CardsField extends Controls {
  public categ: Controls<HTMLElement>;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'cards-field', "Categories");
    this.node.innerHTML = `
    <div class="header__cat">Categories</div>
        ${items.map((item) => `
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
          attribute = card.getAttribute("data-set");
          n = Number(`${attribute}`);
          pict = (n * 10);

          questionsField.onGoCategoryClick = () => {
            questionsField.destroy();
            const cardsField = new CardsField(parentNode);
            const removeImage = document.querySelector('.pictures__forquestions-pic');
            if(removeImage) {
              removeImage.remove();
            }
          }
        })
      })
    }
  }
}
export default CardsField;