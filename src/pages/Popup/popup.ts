import Controls from "../../control";
import "./popup.scss";

class Popup extends Controls {
  //element: string;
  public element: HTMLElement;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", "popup__wrapper")
    this.element = this.node;
    this.node.innerHTML = `
      <div class="popup__container">
            <div class="popup-content">
                <div class="img">
                    <img class="popup__image" src="./../../assets/full/0full.jpg" alt="it's an image">
                </div>
                <div class="name-of-picture">Сватовство майора</div>
                <div class="author">Павел Федотов</div>
                <div class="year">1852</div>
                <button class="next">Next</button> // при клике - дисплей ноне и переходим на следующую картинку в категории
            </div>
      </div>
    `
  }

}
export default Popup;