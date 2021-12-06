import Controls from "../../control";

class Popup extends Controls {
  private container: Controls<HTMLElement>;
  private content: Controls<HTMLElement>;
  private mainInfo: Controls<HTMLElement>;

  constructor(parentNode: HTMLElement) {
    super(parentNode, "div", "popup__wrapper")
    this.container = new Controls(this.node, "div", "popup__container");
    this.content = new Controls(this.node, "div", "popup-content");
    this.mainInfo = new Controls(this.node, "div", "popup__main-info");
  }
}
export default Popup;