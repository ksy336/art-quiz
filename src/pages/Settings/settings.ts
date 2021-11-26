import Controls from '../../control';

export class Settings extends Controls {
  private goSettingsButton: Controls<HTMLButtonElement>;

  private goBackButton: Controls<HTMLButtonElement>;

  public onGoBackClick: () => void;

  public onGoSettingsClick: () => void;

  private goBack: HTMLElement;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', 'settings');
    this.goSettingsButton = new Controls(
      this.node,
      'button',
      'settings__button',
      'Settings',
    );
    this.goBackButton = new Controls(
      this.node,
      'button',
      'settings__button-home',
      'Home',
    );
    const goBack = document.querySelector<HTMLElement>(
      '.settings__button-home',
    );
    const settingBack =
      document.querySelector<HTMLElement>('.settings__button');
    this.goSettingsButton.node.onclick = () => {
      this.onGoSettingsClick();
      if (goBack) {
        goBack.style.display = 'flex';
      }
      if (settingBack) {
        settingBack.style.display = 'none';
      }
    };
    this.goBackButton.node.onclick = () => {
      this.onGoBackClick();
    };
  }
}
