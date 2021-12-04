import Controls from '../../../control';
import './cards-field.scss';
import QuestionsForArtists from "../../QuestionsPage/QuestionsForArtists";
import {itemsForPictures} from "../../../utils";
import QuestionsForPictures from "../../QuestionsPage/QuestionForPictures/QuestionForPictures";
export let attribute : string | number | null;
export let n: number;

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
          attribute = card.getAttribute("data-set");
          n = Number(`${attribute}`);
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
  getImage(max: number) {
    return Math.floor(Math.random() * max);
  }

  getUniqueValuesFromArray(arr: any) {
    let result: string | any[] = [];

    for(let val of arr) {
      if(!result.includes(val)) {
        result.push(val);
      }
    }
    return result;
  }

  // async getAuthors() {
  //   try {
  //     const photos = './assets/data.json';
  //     const response = await fetch(photos);
  //     const myPicture = await response.json();
  //
  //
  //     const allAuthors = [...myPicture].map((item) => item.author);
  //     const authors = this.getUniqueValuesFromArray(allAuthors);
  //     const myPict = document.querySelector('.question');
  //     let randomAuthors: any;
  //     if (n === 0) {
  //       randomAuthors = authors.slice(0, 10);
  //       console.log(randomAuthors);
  //       if (myPict) {
  //         myPict.textContent = `Какую картину написал ${randomAuthors[0]}?`;
  //       }
  //     }
  //   }
  //   catch(e) {
  //     if(e) {
  //       console.log("Error");
  //     }
  //   }
  //   }
  }

export default CardsForPicturesField;