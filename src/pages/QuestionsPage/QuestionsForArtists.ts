import Controls from "../../control";
import "./questionsForArtists.scss";
import DataHolder from "../../dataHolder";
import {n, pict} from "../categories/components/CategoriesForArtists";

 class QuestionsForArtists extends Controls {
   private goCategoryButton: Controls<HTMLButtonElement>;
   public onGoCategoryClick: () => void;
   private question: Controls<HTMLElement>;
   private answers: Controls<HTMLElement>;
   private picturesWrapper: Controls<HTMLElement>;
   private author: string;

  constructor(parentNode: HTMLElement, author: string) {
     super(parentNode, "div", "questions-container");
    this.goCategoryButton = new Controls(this.node, "button", "button__categ", "Categories");
    this.question = new Controls(this.node, "h3", "question", "Кто автор данной картины?");
    this.picturesWrapper = new Controls(this.node, "div", "pictures__container");
    this.answers = new Controls(this.node, "div", "answers__container");
    this.author = author;

    this.getImages();

    this.goCategoryButton.node.onclick = () => {
      this.onGoCategoryClick();
    }
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


  async getImages() {
    try {
      const photos = './assets/data.json';
      const response = await fetch(photos);
      const myPicture = await response.json();
      const allAnswers = document.querySelector('.answers__container');

      // Добавляю 4 варианта(автора) ответа на страницу (4 рандомных автора- 1 из них должен быть правильным)
      const allAuthors = [...myPicture].map((item) => item.author);
      const authors = this.getUniqueValuesFromArray(allAuthors);
      const authorsData = this.getUniqueValuesFromArray(allAuthors).join(" ");
      console.log(authorsData);

      // создаю пустой массив,где будут храниться все 4 варианта ответов
      const answers = [];
      answers.push(this.author);

      // Случайный автор
      // const randomIndex = Math.floor(Math.random() * authors.length);
      // const randomAuthor = authors[randomIndex];
      // if(!answers.includes(randomAuthor)) {
      //   answers.push(randomAuthor);
      // }
      // answers.push(randomAuthor);
      // answers.push(randomAuthor);
      //answers.sort(() => 0.5 - Math.random());
      //console.log(answers);

      let results = authors
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      let randomAuthor1 = results[0];
      let randomAuthor2 = results[1];
      let randomAuthor3 = results[2];
      answers.push(randomAuthor1,randomAuthor2, randomAuthor3)
      answers.sort(() => 0.5 - Math.random());
      console.log(answers);
      answers.map((item, i) => {
           if(allAnswers) {
            const gameAuthors = document.createElement("div");
            gameAuthors.classList.add('answer__item');
            // gameAuthors.setAttribute("id", `${randomAnswers[i].item.join("")}`);
            allAnswers.append(gameAuthors);
            gameAuthors.append(item);
          }
          return item;
        });

        const answerContainer = document.querySelector(".answers__container");
        if(answerContainer) {
          // answerContainer.addEventListener("click", showPopup);
          // showPopup() {
             // event.target.classList.add("popup__visible");
        }
          // }

      const portraitImages = [...myPicture]
        .map(item => item.imageNum);

      const picturesWrapper = document.querySelector(".pictures__container");
      const myImage = `/assets/full/${pict}full.jpg`;
      const img = new Image();
      img.classList.add("pictures__forquestions-pic");
      img.src = `${myImage}`;
      if(picturesWrapper) {
        picturesWrapper.append(img);
      }
    } catch (error) {
      if (error) {
        console.log('Error');
      }
    }
  }
}
export default QuestionsForArtists;