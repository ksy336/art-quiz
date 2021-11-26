import Controls from '../../../control';

export class ArtistsQuiz extends Controls {
  private playButton: Controls<HTMLButtonElement>;

  public onPlayClick: () => void;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'main artists__block');
    this.playButton = new Controls(
      this.node,
      'button',
      'pic__button',
      'Artists Quiz',
    );
    this.playButton.node.onclick = () => {
      this.onPlayClick();
    };
  }
}
