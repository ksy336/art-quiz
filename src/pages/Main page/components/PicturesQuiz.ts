import Controls from '../../../control';

export class PicturesQuiz extends Controls {
  private playButton: Controls<HTMLButtonElement>;

  public onPlayToCatClick: () => void;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ' main pictures__block');
    this.playButton = new Controls(
      this.node,
      'button',
      'pic__button',
      'Pictures Quiz',
    );
    this.playButton.node.onclick = () => {
      this.onPlayToCatClick();
    };
  }
}
