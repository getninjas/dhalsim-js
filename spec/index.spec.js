import MediaQueryContent from '../src/dhalsim'
import fs from 'fs'

describe('MediaQueryContent', () => {
  const fixturesPath = `${__dirname}/fixtures`
  let mediaQueryContent;

  describe('constructor', () => {
    it('define default options', () => {
      const options = {
        breakingPointValue: '',
        tablet: '768px',
        desktop: '960px',
        wide: '1200px',
      };

      mediaQueryContent = new MediaQueryContent();

      expect(mediaQueryContent.breakingPointValue).toBe(options.breakingPointValue);
      expect(mediaQueryContent.tablet).toBe(options.tablet);
      expect(mediaQueryContent.desktop).toBe(options.desktop);
      expect(mediaQueryContent.wide).toBe(options.wide);
    });
  });

  describe('init', () => {
    it('call renderCSS', () => {
      mediaQueryContent = new MediaQueryContent();
      spyOn(mediaQueryContent, 'renderCSS');

      mediaQueryContent.init();
      expect(mediaQueryContent.renderCSS).toHaveBeenCalled();
    });
  });

  describe('renderCSS', () => {
    beforeEach(() => {
      document.body.innerHTML = fs.readFileSync(`${fixturesPath}/renderCss.html`)
    });

    it('call renderCSS', () => {
      const element = document.querySelector('style');
      mediaQueryContent = new MediaQueryContent().init();
      expect(element).not.toBeUndefined();
    });
  });

  describe('.breakpoint', () => {
    beforeEach(() => {
      Object.defineProperty(window, 'getComputedStyle', {
        value: () => ({
            getPropertyValue: (prop) => {
                return 'smartphone';
            }
        })
      });

      document.body.innerHTML = fs.readFileSync(`${fixturesPath}/smartphone.html`);
      mediaQueryContent = new MediaQueryContent();
    });

    afterEach(() => {
      document.getElementById('media-query-content-smartphone').remove();
    });

    it('returns breakpoint value', () => {
      const breakpoint = mediaQueryContent.breakpoint;

      expect(breakpoint).toBe('smartphone');
    });
  });

  describe('.isMobile', () => {
    beforeEach(() => {
      Object.defineProperty(window, 'getComputedStyle', {
        value: () => ({
            getPropertyValue: (prop) => {
                return 'smartphone';
            }
        })
      });
      document.body.innerHTML = fs.readFileSync(`${fixturesPath}/smartphone.html`);
      mediaQueryContent = new MediaQueryContent();
    });

    afterEach(() => {
      document.getElementById('media-query-content-smartphone').remove();
    });

    it('returns true when is smartphone', () => {
      const breakpoint = mediaQueryContent.breakpoint;

      expect(breakpoint).toBe('smartphone');
      expect(mediaQueryContent.isMobile()).toBe(true);
    });
  });

  describe('.isTablet', () => {
    beforeEach(() => {
      Object.defineProperty(window, 'getComputedStyle', {
        value: () => ({
            getPropertyValue: (prop) => {
                return 'tablet';
            }
        })
      });
      document.body.innerHTML = fs.readFileSync(`${fixturesPath}/tablet.html`);
      mediaQueryContent = new MediaQueryContent();
    });

    afterEach(() => {
      document.getElementById('media-query-content-tablet').remove();
    });

    it('returns true when is tablet', () => {
      const breakpoint = mediaQueryContent.breakpoint;

      expect(breakpoint).toBe('tablet');
      expect(mediaQueryContent.isTablet()).toBe(true);
    });
  });

  describe('.isDesktop', () => {
    beforeEach(() => {
      Object.defineProperty(window, 'getComputedStyle', {
        value: () => ({
            getPropertyValue: (prop) => {
                return 'desktop';
            }
        })
      });
      document.body.innerHTML = fs.readFileSync(`${fixturesPath}/desktop.html`);
      mediaQueryContent = new MediaQueryContent();

    });

    afterEach(() => {
      document.getElementById('media-query-content-desktop').remove();
    });

    it('returns true when is desktop', () => {
      const breakpoint = mediaQueryContent.breakpoint;

      expect(breakpoint).toBe('desktop');
      expect(mediaQueryContent.isDesktop()).toBe(true);
    });
  });

  describe('.isWide', () => {
    beforeEach(() => {
      Object.defineProperty(window, 'getComputedStyle', {
        value: () => ({
            getPropertyValue: (prop) => {
                return 'wide';
            }
        })
      });
      document.body.innerHTML = fs.readFileSync(`${fixturesPath}/wide.html`);
      mediaQueryContent = new MediaQueryContent();
    });

    afterEach(() => {
      document.getElementById('media-query-content-wide').remove();
    });

    it('returns true when is wide', () => {
      const breakpoint = mediaQueryContent.breakpoint;

      expect(breakpoint).toBe('wide');
      expect(mediaQueryContent.isWide()).toBe(true);
    });
  });

  describe('.beyondTablet', () => {
    beforeEach(() => {
      Object.defineProperty(window, 'getComputedStyle', {
        value: () => ({
            getPropertyValue: (prop) => {
                return 'wide';
            }
        })
      });
      mediaQueryContent = new MediaQueryContent();
      document.body.innerHTML = fs.readFileSync(`${fixturesPath}/wide.html`);
    });

    afterEach(() => {
      document.getElementById('media-query-content-wide').remove();
    });

    it('returns true when it is larger than tablets', () => {
      const breakpoint = mediaQueryContent.breakpoint;
      expect(breakpoint).not.toBe('smartphone');
      expect(breakpoint).not.toBe('tablet');
      expect(mediaQueryContent.beyondTablet()).toBe(true);
    });
  });

  describe('.beyondMobile', () => {
    beforeEach(() => {
      Object.defineProperty(window, 'getComputedStyle', {
        value: () => ({
            getPropertyValue: (prop) => {
                return 'tablet';
            }
        })
      });
      mediaQueryContent = new MediaQueryContent();
      document.body.innerHTML = fs.readFileSync(`${fixturesPath}/tablet.html`);
    });

    afterEach(() => {
      document.getElementById('media-query-content-tablet').remove();
    });

    it('returns true when is larger then smartphone', () => {
      const breakpoint = mediaQueryContent.breakpoint;

      expect(breakpoint).not.toBe('smartphone');
      expect(breakpoint).toBe('tablet');
      expect(mediaQueryContent.beyondMobile()).toBe(true);
    });
  });
});
