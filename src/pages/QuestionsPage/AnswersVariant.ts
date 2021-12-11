import Controls from "../../control";
import "./questionsForArtists.scss";

export class AnswersVariant extends Controls {
  public answersContainer: Controls<HTMLElement>;
  public author: any;
  constructor(parentNode:HTMLElement) {
    super(parentNode, "div", "answers__container");
     this.answersContainer = new Controls(this.node, "div", "answers__item");
     this.answersContainer.setAttribute("data-author", `${this.author}`)
  }
}