import Controls from '../../../control';
import './cards-field.scss';
import QuestionsForArtists from "../../QuestionsPage/QuestionsForArtists";

class CardsForPicturesField extends Controls {
  private items = [
    {
      name: "Portrait",
      img: "120",
      url:"",
      total: ""
    },
    {
      name: "Landscape",
      img: "130",
      url:"",
      total: ""
    },
    {
      name: "Still Life",
      img: "140",
      url:"",
      total: ""
    },
    {
      name: "Graphic",
      img: "150",
      url:"",
      total: ""
    },
    {
      name: "Antique",
      img: "160",
      url:"",
      total: ""
    },
    {
      name: "Avant-Garde",
      img: "170",
      url:"",
      total: ""
    },
    {
      name: "Renaissance",
      img: "180",
      url:"",
      total: ""
    },
    {
      name: "Surrealism",
      img: "190",
      url:"",
      total: ""
    },
    {
      name: "Kitsch",
      img: "200",
      url:"",
      total: ""
    },
    {
      name: "Minimalism",
      img: "210",
      url:"",
      total: ""
    },
    {
      name: "Avangard",
      img: "220",
      url:"",
      total: ""
    },
    {
      name: "Industrial",
      img: "230",
      url:"",
      total: ""
    }
  ]
  private categ: Controls<HTMLElement>;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'cards-field', "Categories");
    this.node.innerHTML = `
    <div class="header__cat">Categories</div>
        ${this.items.map((item) => `
            <div class="card">
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
          const questionsField = new QuestionsForArtists(parentNode);
          questionsField.onGoCategoryClick = () => {
            questionsField.destroy();
            const cardsField = new CardsForPicturesField(parentNode);
          }
        })
      })
    }
  }
}
export default CardsForPicturesField;