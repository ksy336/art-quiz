import Controls from "../../control";
import "./questionsForArtists.scss";
import DataHolder from "../../dataHolder";
import {n, pict} from "../categories/components/CategoriesForArtists";
import {AnswersVariant} from "./AnswersVariant";
import Popup from "../Popup/popup";
import {container} from "webpack";

//export var authorsData: string;
// export var myPicture: Array<any>;
//export var authors: Array<any>;

// export function getUniqueValuesFromArray(arr: any) {
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
// export async function getImages() {
//   try {
//     const photos = './assets/data.json';
//     const response = await fetch(photos);
//     const myPicture = await response.json();
//     const allAuthors = [...myPicture].map((item) => item.author);
//       const authors = getUniqueValuesFromArray(allAuthors);
//      const authorsData = getUniqueValuesFromArray(allAuthors).join(" ");
//      return authors;
//   } catch (error) {
//     if (error) {
//       console.log('Error');
//     }
//   }
//   }
// // getImages()
//   //console.log(getImages())

interface MyInterface {
  type: string;
}
  class QuestionsForArtists extends Controls {
    private goCategoryButton: Controls<HTMLButtonElement>;
    public onGoCategoryClick: () => void;
    private question: Controls<HTMLElement>;
    private answersContainer: Controls<HTMLElement>;
    private picturesWrapper: Controls<HTMLElement>;
    public correctAuthor: string;
    //public popup: Popup;

    constructor(parentNode: HTMLElement, correctAuthor: string) {
      super(parentNode, "div", "questions-container");
      this.correctAuthor = correctAuthor;
      this.goCategoryButton = new Controls(this.node, "button", "button__categ", "Categories");
      this.question = new Controls(this.node, "h3", "question", "Кто автор данной картины?");
      this.picturesWrapper = new Controls(this.node, "div", "pictures__container");
      this.answersContainer = new Controls(this.node, "div", "answers__container");
      this.getImages();

      this.goCategoryButton.node.onclick = () => {
        this.onGoCategoryClick();
      }
    }

    getUniqueValuesFromArray(arr: any) {
      let result: string | any[] = [];

      for (let val of arr) {
        if (!result.includes(val)) {
          result.push(val);
        }
      }
      return result;
    }

    showPopup() {
      console.log("hello");
      const containerWrapper = document.querySelector(".questions-container");
      const popupWrapper = document.createElement("div");
      popupWrapper.classList.add("popup");
      const popup = new Popup(this.node);
      console.log(popup);
      popupWrapper.append(popup.element);
      if(containerWrapper) {
        containerWrapper.append(popupWrapper);
      }
    }
    async getImages() {
      try {
        const photos = './assets/data.json';
        const response = await fetch(photos);
        const myPicture = await response.json();
        const allAuthors = [...myPicture].map((item) => item.author);
        const authors = this.getUniqueValuesFromArray(allAuthors);
        console.log(allAuthors);
        const authorsData = this.getUniqueValuesFromArray(allAuthors).join(" ");
        const allAnswers = document.querySelector('.answers__container');
        const findIndex = [...myPicture].findIndex(item => item.author === "Илья Репин");
        console.log(findIndex);
        //создаю пустой массив,где будут храниться все 4 варианта ответов
        const answers = [];
        answers.push(this.correctAuthor);
        let results = authors
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);
        let randomAuthor1 = results[0];
        let randomAuthor2 = results[1];
        let randomAuthor3 = results[2];
        answers.push(randomAuthor1, randomAuthor2, randomAuthor3)
        answers.sort(() => 0.5 - Math.random());
        console.log(answers);
        //answers.map((item) => new AnswersVariant(item));
        answers.map(item => {
          if (allAnswers) {
            const gameAuthors = document.createElement("div");
            gameAuthors.classList.add('answer__item');
            gameAuthors.setAttribute("data-author", "");
            allAnswers.append(gameAuthors);
            gameAuthors.append(item);
          }
          return item;
        })

        console.log(answers);

        if(allAnswers) {
          allAnswers.addEventListener("click", this.showPopup);
          }



        const portraitImages = [...myPicture]
          .map(item => item.imageNum);

        const picturesWrapper = document.querySelector(".pictures__container");
        const myImage = `/assets/full/${pict}full.jpg`;
        const img = new Image();
        img.classList.add("pictures__forquestions-pic");
        img.src = `${myImage}`;
        if (picturesWrapper) {
          picturesWrapper.append(img);
        }
        return authorsData;
      } catch (error) {
        if (error) {
          console.log('Error');
        }
      }

    }
  }
export default QuestionsForArtists;