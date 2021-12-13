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
  public correctAuthor: string;

  constructor(parentNode: HTMLElement, correctAuthor: string) {
    super(parentNode, 'div', 'cards-field', "Categories");
    this.correctAuthor = correctAuthor;
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

    function getUniqueValuesFromArray(arr: any) {
      let result: string | any[] = [];

      for (let val of arr) {
        if (!result.includes(val)) {
          result.push(val);
        }
      }
      return result;
    }
        const questionsButton = Array.from(document.querySelectorAll(".card"));
        const cardsF = document.querySelector<HTMLElement>(".cards-field");
        if (questionsButton) {
          questionsButton.forEach((card) => {
            card.addEventListener("click", () => {
              if (cardsF) {
                cardsF.remove();
              }
              const questionsForArtists = new QuestionsForArtists(parentNode, "[]");//должен же выводится не целый массив а один правильный автор
              questionsForArtists.getImages();
              questionsForArtists.correctAuthor.push("Альбрехт Дюрер");
              attribute = card.getAttribute("data-set");
              n = Number(`${attribute}`);
              pict = (n * 10);

              questionsForArtists.onGoCategoryClick = () => {
                questionsForArtists.destroy();
                const categoriesForArtists = new CategoriesForArtists(parentNode, "");
                const removeImage = document.querySelector('.pictures__forquestions-pic');
                if (removeImage) {
                  removeImage.remove();
                }
              }
            })
          })
        }
  }
}
export default CategoriesForArtists;