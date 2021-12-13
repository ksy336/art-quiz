import Controls from "../../control";
import "./popup.scss";
import {items} from "../../utils";
import QuestionsForArtists from "../QuestionsPage/QuestionsForArtists";

class Popup extends Controls {
  //element: string;
  public element: HTMLElement;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", "popup__wrapper")
    this.element = this.node;
  }

  nextImage() {
    console.log("hello");
  const questionsForArtists = new QuestionsForArtists(this.node, "[]");
  questionsForArtists.correctAuthor.push("Илья Репин");
  }

  async getDataForPopup() {
    try {
      const images = "./assets/data.json";
      const res = await fetch(images);
      const data = await res.json();
      const container = document.createElement("div");
      container.classList.add("popup__container");
      this.node.append(container);
      const popupContent = document.createElement("div");
      popupContent.classList.add("popup-content");
      container.append(popupContent);
     // const fetchDataFromArray = [...data].map(item => {
        container.innerHTML =  `
        ${[...data].map(item => `
            <div class="img">
                <img class="popup__image" src="./../../assets/full/${item.imageNum}full.jpg" alt="it's an image">
            </div>
            <div class="name-of-picture">${item.name}</div>
               <div class="author">${item.author}</div>
               <div class="year">${item.year}</div>
               <button class="next">Next</button>
        `)};
        `
      const button = document.querySelector(".next");
      if(button) {
        button.addEventListener("click", this.nextImage);
      }
    }
    catch(error) {
      if (error) {
        console.log('Error');
      }
    }
  }

}
export default Popup;