const defaultDhalsimOptions = {
  breakingPointValue: '',
  tablet: '768px',
  desktop: '960px',
  wide: '1200px',
};

export default class Dhalsim {
  constructor(options) {
    Object.assign(this, defaultDhalsimOptions, options);
  }

  init() {
    this.renderCSS();
  }

  renderCSS() {
    const css = `
      body:before {
        content: 'smartphone';
        display: none;
      }

      @media (min-width: ${this.tablet}) {
        body:before {
          content: 'tablet';
        }
      }

      @media (min-width: ${this.desktop}) {
        body:before {
          content: 'desktop';
        }
      }

      @media (min-width: ${this.wide}) {
        body:before {
          content: 'wide';
        }
      }
    `;

    const head = document.getElementsByTagName('head')[0];
    const style = document.createElement('style');

    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    head.appendChild(style);
  }

  get breakpoint() {
    const [body] = document.getElementsByTagName('body');
    this.breakpointValue = window
      .getComputedStyle(body, ':before')
      .getPropertyValue('content')
      .replace(/"/g, '');

    return this.breakpointValue;
  }

  isMobile() {
    return this.breakpoint === 'smartphone';
  }

  isTablet() {
    return this.breakpoint === 'tablet';
  }

  isDesktop() {
    return this.breakpoint === 'desktop';
  }

  isWide() {
    return this.breakpoint === 'wide';
  }

  beyondTablet() {
    return this.isDesktop() || this.isWide();
  }

  beyondMobile() {
    return this.isTablet() || this.beyondTablet();
  }
}
