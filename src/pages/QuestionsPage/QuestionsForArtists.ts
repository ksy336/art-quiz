import Controls from "../../control";
import "./questionsForArtists.scss";
import DataHolder from "../../dataHolder";
import {n, pict} from "../categories/components/cards-field";

 class QuestionsForArtists extends Controls {
   private goCategoryButton: Controls<HTMLButtonElement>;
   public onGoCategoryClick: () => void;
   private question: Controls<HTMLElement>;
   private answers: Controls<HTMLElement>;
   private picturesWrapper: Controls<HTMLElement>;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", "questions-container");
    this.goCategoryButton = new Controls(this.node, "button", "button__categ", "Categories");
    this.question = new Controls(this.node, "h3", "question", "Кто автор данной картины?");
    this.picturesWrapper = new Controls(this.node, "div", "pictures__container");
    this.answers = new Controls(this.node, "div", "answers__container");
    const dataHolder = new DataHolder();
    dataHolder.build();
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
      // console.log(response);
      const myPicture = await response.json();
      const allAuthors = [...myPicture].map((item) => item.author);
      console.log(allAuthors);
      const allAnswers = document.querySelector('.answers__container');

     // Get right author
     //  const correctAuthors = [...myPicture].map(item => item.imageNum);
     //  let res:  null | Array<string> = [];
     //  for(let i = 0; i < allAuthors.length; i++) {
     //
     //    for(let j = 0; j < correctAuthors.length; j++) {
     //      if(allAuthors[i] === correctAuthors[j]) {
     //        res.push(allAuthors[i]);
     //        return res;
     //      }
     //    }
     //  }
     //  console.log(res);
     // //  const correctAuthor = allAuthors.map(item => {
     // //    const newAttribute = document.createElement("div");
     // //    newAttribute.setAttribute("id", `${item}`);
     // //    if(allAnswers) {
     // //      allAnswers.append(newAttribute);
     // //    }
     // //  })
     //  console.log(correctAuthors);
      const portraitImages = [...myPicture]
        .map(item => item.imageNum);
      const authors = this.getUniqueValuesFromArray(allAuthors);
      const answers = authors
        .sort(() => 0.5 - Math.random())
        .slice(0,4)
        .map((item, i) => {
        // const allAnswers = document.querySelector('.answers__container');
         if(allAnswers) {
           const gameAuthors = document.createElement("div");
           gameAuthors.classList.add('answer__item');
           gameAuthors.setAttribute("id", `${item}`);
           allAnswers.append(gameAuthors);
           gameAuthors.append(item);
          return item;
        }
          // if(allAuthors[i] === portraitImages[i]) {
          //
          // }
      });
      console.log(answers);


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