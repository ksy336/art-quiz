
import "./QuestionForPictures.scss";
import Controls from "../../../control";
import DataHolder from "../../../dataHolder";

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

  async getAuthors() {
    try {
      const photos = './assets/data.json';
      const response = await fetch(photos);
      const myPicture = await response.json();


      const allAuthors = [...myPicture].map((item) => item.author);
      const authors = this.getUniqueValuesFromArray(allAuthors);
      const randomAuthors = authors.sort(() => 0.5 - Math.random()).slice(0, 10);
      //const newAuthor = [...authors[randomAuthors]].join('');

      console.log(randomAuthors);
       const myPict = document.querySelector('.question');
      const container = document.querySelector('.questions-container');
       if(myPict) {
          //myPict.textContent = `Какую картину написал ${newAuthor}?`;
       }

      const portraitImages = [...myPicture]
        .map(item => item.imageNum);

      const newArray = [...authors, ...portraitImages];
      console.log(newArray);

      const allItemsFromData = [...myPicture].map(item => {
        let res = [];
        res.push(item.author);
        res.push(item.imageNum);
        return res;
      })
      console.log(allItemsFromData);

      const randomPictures = portraitImages.sort(() => 0.5 - Math.random()).slice(0, 4).map((item) => {
        const img = new Image();
        img.src = `./assets/full/${item}full.jpg`;
        img.classList.add("pictures__forquestions");
        // img.setAttribute("id", "");
        this.picturesWrapper.append(img);
        return img;
      });
      console.log(randomPictures);

      // const newArray = [...authors, ...portraitImages];
      // console.log(newArray);

    } catch (error) {
      if (error) {
        console.log('Error');
      }
    }
  }
}
export default QuestionsForPictures;