import './about-page.styles.css';
import rendered from '../../utils/render/render';
import BaseComponent from '../base-component/base-component';
import { Callback } from '../shopping-cart/shopping-cart.types';

export default class AboutPage extends BaseComponent {
  private exporeBtn: HTMLElement | null = null;

  constructor(private callback: Callback) {
    super('div', 'about-container about');
    this.render();
  }

  private render(): void {
    rendered('img', this.element, 'about__image', '', {
      src: 'assets/images/about-us-img.jpg',
    });
    const contentWrapper: HTMLElement = rendered('div', this.element, 'about__content-wrapper');
    rendered('h2', contentWrapper, 'about__title', 'About us');
    rendered('p', contentWrapper, 'about__text', 'Welcome to the world of imagination!');
    rendered(
      'p',
      contentWrapper,
      'about__text',
      'ARTificial is a unique collection of posters generated by Midjourney, an AI-powered tool that turns any creative idea into artwork from text.',
    );
    rendered(
      'p',
      contentWrapper,
      'about__text',
      "Each piece of art in our store has been carefully chosen for you by our team and can't wait to illuminate your home or office (or maybe, it will become a present for someone special?..)",
    );
    rendered('p', contentWrapper, 'about__text', 'Explore our collection now to find your perfect match!');
    this.exporeBtn = rendered('button', contentWrapper, 'about__explore-btn', 'Explore');
    this.exporeBtn.addEventListener('click', this.exploreBtnCallback);
  }

  private exploreBtnCallback = (e: Event): void => {
    e.preventDefault();
    window.history.pushState({}, '', '/');
    this.callback(e);
  };
}
