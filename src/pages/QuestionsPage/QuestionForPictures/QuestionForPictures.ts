
import "./QuestionForPictures.scss";
import Controls from "../../../control";
import DataHolder from "../../../dataHolder";
import {itemsForPictures} from "../../../utils";
import {n} from "../../categories/components/CardsForPicturesField";

class QuestionsForPictures extends Controls {
  private goCategoryButton: Controls<HTMLButtonElement>;
  public onGoCategoryClick: () => void;
  private question: Controls<HTMLElement>;
  private picturesWrapper: Controls<HTMLElement>;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", "questions-container");
    this.goCategoryButton = new Controls(this.node, "button", "button__categ", "Categories");
    this.question = new Controls(this.node, "h3", "question");
    this.picturesWrapper = new Controls(this.node, "div", "pictures__wrapper");
    this.goCategoryButton.node.onclick = () => {
      this.onGoCategoryClick();
    }
    this.getAuthors();
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
  async getAuthors() {
    try {
      const photos = './assets/data.json';
      const response = await fetch(photos);
      const myPicture = await response.json();

      const allAuthors = [...myPicture].map((item) => item.author);
      const authors = this.getUniqueValuesFromArray(allAuthors);
      const newAr = Object.entries(myPicture[5]);
      const picturesOwners = [...myPicture].map(item => {
        const result = [];
        result.push(item.author, item.imageNum);
        return result;
      });
      console.log(picturesOwners);

      const myPict = document.querySelector('.question');
      let randomAuthors: any;
      switch(n) {
        case 0:
          randomAuthors = authors.slice(0, 10).sort();
          console.log(randomAuthors);
          if (myPict) {
            myPict.textContent = `Какую картину написал ${randomAuthors[0]}?`;
          }
          break;
        case 1:
          randomAuthors = authors.slice(10, 20);
          console.log(randomAuthors);
          if (myPict) {
            myPict.textContent = `Какую картину написал ${randomAuthors[0]}?`;
          }
          break;
        case 2:
          randomAuthors = authors.slice(20, 30);
          console.log(randomAuthors);
          if (myPict) {
            myPict.textContent = `Какую картину написал ${randomAuthors[0]}?`;
          }
          break;
        case 3:
          randomAuthors = authors.slice(30, 40);
          if (myPict) {
            myPict.textContent = `Какую картину написал ${randomAuthors[0]}?`;
          }
          break;
        case 4:
          randomAuthors = authors.slice(40, 50);
          console.log(randomAuthors);
          if (myPict) {
            myPict.textContent = `Какую картину написал ${randomAuthors[0]}?`;
          }
          break;
        case 5:
          randomAuthors = authors.slice(50, 60);
          console.log(randomAuthors);
          if (myPict) {
            myPict.textContent = `Какую картину написал ${randomAuthors[0]}?`;
          }
          break;
        case 6:
          randomAuthors = authors.slice(60, 70);
          console.log(randomAuthors);
          if (myPict) {
            myPict.textContent = `Какую картину написал ${randomAuthors[0]}?`;
          }
          break;
        case 7:
          randomAuthors = authors.slice(70, 80);
          console.log(randomAuthors);
          if (myPict) {
            myPict.textContent = `Какую картину написал ${randomAuthors[0]}?`;
          }
          break;
        case 8:
          randomAuthors = authors.slice(80, 90);
          console.log(randomAuthors);
          if (myPict) {
            myPict.textContent = `Какую картину написал ${randomAuthors[0]}?`;
          }
          break;
        case 9:
          randomAuthors = authors.slice(90, 93);
          console.log(randomAuthors);
          if (myPict) {
            myPict.textContent = `Какую картину написал ${randomAuthors[0]}?`;
          }
          break;
        case 10:
          randomAuthors = authors.slice(5, 15);
          console.log(randomAuthors);
          if (myPict) {
            myPict.textContent = `Какую картину написал ${randomAuthors[0]}?`;
          }
          break;
        case 11:
          randomAuthors = authors.slice(15, 25);
          console.log(randomAuthors);
          if (myPict) {
            myPict.textContent = `Какую картину написал ${randomAuthors[0]}?`;
          }
          break;
      }
      const matchingPictures = [...picturesOwners].map(item => {
        let res = [];
        const img = new Image();
        img.src = `./assets/full/${item[1]}full.jpg`;
        if(item[0]=== img.src) {
          res.push(img.src)
        };
        console.log(item[0]);
        return img;
      })
      console.log(matchingPictures);

      const portraitImages = [...myPicture]
        .map(item => item.imageNum);
      const randomPictures = portraitImages.sort(() => 0.5 - Math.random()).slice(0, 4).map((item) => {
        const img = new Image();
        img.src = `./assets/full/${item}full.jpg`;
        img.classList.add("pictures__forquestions");
        // img.setAttribute("id", "");
        this.picturesWrapper.append(img);
        return img;
      });
      console.log(randomPictures);


    } catch (error) {
      if (error) {
        console.log('Error');
      }
    }
  }
}
export default QuestionsForPictures;