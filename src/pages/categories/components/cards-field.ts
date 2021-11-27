import Controls from '../../../control';
import './cards-field.scss';
import QuestionsForArtists from "../../QuestionsPage/QuestionsForArtists";
import Categories from "../categories";

class CardsField extends Controls {
  private items = [
    {
      name: "Portrait",
      img: "0",
      url:"",
      total: ""
    },
    {
      name: "Landscape",
      img: "10",
      url:"",
      total: ""
    },
    {
      name: "Still Life",
      img: "20",
      url:"",
      total: ""
    },
    {
      name: "Graphic",
      img: "30",
      url:"",
      total: ""
    },
    {
      name: "Antique",
      img: "40",
      url:"",
      total: ""
    },
    {
      name: "Avant-Garde",
      img: "50",
      url:"",
      total: ""
    },
    {
      name: "Renaissance",
      img: "60",
      url:"",
      total: ""
    },
    {
      name: "Surrealism",
      img: "70",
      url:"",
      total: ""
    },
    {
      name: "Kitsch",
      img: "80",
      url:"",
      total: ""
    },
    {
      name: "Minimalism",
      img: "90",
      url:"",
      total: ""
    },
    {
      name: "Avangard",
      img: "100",
      url:"",
      total: ""
    },
    {
      name: "Industrial",
      img: "110",
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
            const cardsField = new CardsField(parentNode);
          }
        })
      })
    }
  }
}
export default CardsField;