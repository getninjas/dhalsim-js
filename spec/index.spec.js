import MediaQueryContent from '../src/media-query';

describe('MediaQueryContent', () => {
  let mediaQueryContent;

  describe('.breakpoint', () => {
    beforeEach(() => {
      document.body.innerHTML = __html__['spec/fixtures/smartphone.html'];
      mediaQueryContent = new MediaQueryContent();
    });

    it('returns breakpoint value', () => {
      const breakpoint = mediaQueryContent.breakpoint();

      expect(breakpoint).toBe('smartphone');
    });

    describe('when there is no CSS with defined content attrs', () => {
      it('return empty string', () => {
        document.getElementById('media-query-content-smartphone').remove();

        const breakpoint = mediaQueryContent.breakpoint();

        expect(breakpoint).toBe('');
      });
    });
  });

  describe('.isMobile', () => {
    beforeEach(() => {
      document.body.innerHTML = __html__['spec/fixtures/smartphone.html'];
    });

    it('returns true when is smartphone', () => {
      const breakpoint = mediaQueryContent.breakpoint();

      expect(breakpoint).toBe('smartphone');
      expect(mediaQueryContent.isMobile()).toBe(true);
    });
  });

  describe('.isTablet', () => {
    beforeEach(() => {
      document.body.innerHTML = __html__['spec/fixtures/tablet.html'];
    });

    it('returns true when is tablet', () => {
      const breakpoint = mediaQueryContent.breakpoint();

      expect(breakpoint).toBe('tablet');
      expect(mediaQueryContent.isTablet()).toBe(true);
    });
  });

  describe('.isDesktop', () => {
    beforeEach(() => {
      document.body.innerHTML = __html__['spec/fixtures/desktop.html'];
    });

    it('returns true when is desktop', () => {
      const breakpoint = mediaQueryContent.breakpoint();

      expect(breakpoint).toBe('desktop');
      expect(mediaQueryContent.isDesktop()).toBe(true);
    });
  });

  describe('.isWide', () => {
    beforeEach(() => {
      document.body.innerHTML = __html__['spec/fixtures/wide.html'];
    });

    it('returns true when is wide', () => {
      const breakpoint = mediaQueryContent.breakpoint();

      expect(breakpoint).toBe('wide');
      expect(mediaQueryContent.isWide()).toBe(true);
    });
  });

  describe('.beyondTablet', () => {
    beforeEach(() => {
      document.body.innerHTML = __html__['spec/fixtures/wide.html'];
    });

    it('returns true when is larger then tablets', () => {
      const breakpoint = mediaQueryContent.breakpoint();

      expect(breakpoint).not.toBe('smartphone');
      expect(breakpoint).not.toBe('tablet');
      expect(mediaQueryContent.beyondTablet()).toBe(true);
    });
  });

  describe('.beyondMobile', () => {
    beforeEach(() => {
      document.body.innerHTML = __html__['spec/fixtures/tablet.html'];
    });

    it('returns true when is larger then smartphone', () => {
      const breakpoint = mediaQueryContent.breakpoint();

      expect(breakpoint).not.toBe('smartphone');
      expect(breakpoint).toBe('tablet');
      expect(mediaQueryContent.beyondMobile()).toBe(true);
    });
  });
});
