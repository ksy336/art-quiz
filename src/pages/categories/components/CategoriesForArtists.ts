import Controls from '../../../control';
import './cards-field.scss';
import QuestionsForArtists from "../../QuestionsPage/QuestionsForArtists";
import Categories from "../categories";
import {items} from "../../../utils";


export let attribute: any;
export let n: number;
export let pict : number;
export let myImage: string;

class CategoriesForArtists extends Controls {
  public categ: Controls<HTMLElement>;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'cards-field', "Categories");
    //this.getImages();
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
          const questionsField = new QuestionsForArtists(parentNode,"authors");
          attribute = card.getAttribute("data-set");
          n = Number(`${attribute}`);
          pict = (n * 10);

    questionsField.onGoCategoryClick = () => {
      questionsField.destroy();
      const cardsField = new CategoriesForArtists(parentNode);
      const removeImage = document.querySelector('.pictures__forquestions-pic');
      if(removeImage) {
        removeImage.remove();
      }
    }
        })
      })
    }
  }

  // getUniqueValuesFromArray(arr: any) {
  //   let result: string | any[] = [];
  //
  //   for (let val of arr) {
  //     if (!result.includes(val)) {
  //       result.push(val);
  //     }
  //   }
  //   return result;
  // }
  //
  // async getImages() {
  //   try {
  //     const photos = './assets/data.json';
  //     const response = await fetch(photos);
  //     const myPicture = await response.json();
  //     const allAnswers = document.querySelector('.answers__container');
  //     // Добавляю 4 варианта(автора) ответа на страницу (4 рандомных автора- 1 из них должен быть правильным)
  //     const allAuthors = [...myPicture].map((item) => item.author);
  //     // const authors = this.getUniqueValuesFromArray(allAuthors);
  //     const authorsData = this.getUniqueValuesFromArray(allAuthors).join(" ");
  //     const questionsButton = Array.from(document.querySelectorAll(".card"));
  //     const cardsF = document.querySelector<HTMLElement>(".cards-field");
  //     if (questionsButton) {
  //       questionsButton.forEach((card) => {
  //         card.addEventListener("click", () => {
  //           if (cardsF) {
  //             cardsF.remove();
  //           }
  //           const questionsField = new QuestionsForArtists(parentNode, `${authorsData}`);
  //           attribute = card.getAttribute("data-set");
  //           n = Number(`${attribute}`);
  //           pict = (n * 10);
  //         })
  //       })
  //     }
  //   } catch (error) {
  //     if (error) {
  //       console.log('Error');
  //     }
  //   }
  //}
}
export default CategoriesForArtists;