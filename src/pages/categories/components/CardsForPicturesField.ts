import Controls from '../../../control';
import './cards-field.scss';
import QuestionsForArtists from "../../QuestionsPage/QuestionsForArtists";
import {itemsForPictures} from "../../../utils";
import QuestionsForPictures from "../../QuestionsPage/QuestionForPictures/QuestionForPictures";


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
          const questionsField = new QuestionsForPictures(parentNode);
          const attribute = card.getAttribute("data-set");
          // let res = [];
          // const n = Number(`${attribute}`);
          // const pict = (n * 10);
          // const myImage = `/assets/full/${pict}full.jpg`;
          // const img = new Image();
          // img.classList.add("pictures__forquestions");
          // img.src = `${myImage}`;
          // parentNode.append(img);
          // res.push(img);
          // console.log(pict);
          // console.log(img);
          questionsField.onGoCategoryClick = () => {
            questionsField.destroy();
            const cardsField = new CardsForPicturesField(parentNode);
            const removeImage = document.querySelector('.pictures__forquestions');
            if(removeImage) {
              removeImage.remove();
            }
          }
        })
      })
    }
  }
}
export default CardsForPicturesField;