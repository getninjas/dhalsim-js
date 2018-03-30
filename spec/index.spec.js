import MediaQueryContent from '../src/dhalsim';

describe('MediaQueryContent', () => {
  let mediaQueryContent;

  describe('constructor', () => {
    it('define default options', () => {
      mediaQueryContent = new MediaQueryContent();

      const options = {
        breakingPointValue: '',
        tablet: '768px',
        desktop: '960px',
        wide: '1200px',
      };

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
      document.body.innerHTML = __html__['spec/fixtures/renderCss.html'];
    });

    it('call renderCSS', () => {
      mediaQueryContent = new MediaQueryContent().init();
      const element = document.querySelector('style');
      expect(element).not.toBeUndefined();
    });
  });

  describe('.breakpoint', () => {
    beforeEach(() => {
      document.body.innerHTML = __html__['spec/fixtures/smartphone.html'];
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
      document.body.innerHTML = __html__['spec/fixtures/smartphone.html'];
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
      document.body.innerHTML = __html__['spec/fixtures/tablet.html'];
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
      document.body.innerHTML = __html__['spec/fixtures/desktop.html'];
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
      document.body.innerHTML = __html__['spec/fixtures/wide.html'];
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
      document.body.innerHTML = __html__['spec/fixtures/wide.html'];
    });

    afterEach(() => {
      document.getElementById('media-query-content-wide').remove();
    });

    it('returns true when is larger then tablets', () => {
      const breakpoint = mediaQueryContent.breakpoint;

      expect(breakpoint).not.toBe('smartphone');
      expect(breakpoint).not.toBe('tablet');
      expect(mediaQueryContent.beyondTablet()).toBe(true);
    });
  });

  describe('.beyondMobile', () => {
    beforeEach(() => {
      document.body.innerHTML = __html__['spec/fixtures/tablet.html'];
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
