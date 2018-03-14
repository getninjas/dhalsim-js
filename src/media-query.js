const defaultMediaQueryOptions = {
  breakingPointValue: '',
};

export default class MediaQuery {
  constructor(options) {
    const defaultOptions = Object.assign({}, defaultMediaQueryOptions, options);
    this.breakingPointValue = defaultOptions.breakingPointValue;

    this.body = document.getElementsByTagName('body')[0];
  }

  breakpoint() {
    this.breakpointValue = window
      .getComputedStyle(this.body, ':before')
      .getPropertyValue('content')
      .replace(/"/g, '');

    return this.breakpointValue;
  }

  isMobile() {
    return this.breakpoint() === 'smartphone';
  }

  isTablet() {
    return this.breakpoint() === 'tablet';
  }

  isDesktop() {
    return this.breakpoint() === 'desktop';
  }

  isWide() {
    return this.breakpoint() === 'wide';
  }

  beyondTablet() {
    return this.isDesktop() || this.isWide();
  }

  beyondMobile() {
    return this.isTablet() || this.beyondTablet();
  }
}
