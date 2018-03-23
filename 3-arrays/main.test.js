const main = require('./main');

describe('3-arrays', () => {
  let tvShows;

  beforeEach(() => {
    tvShows = [
      { title: 'Black Mirror', rate: 96 },
      { title: 'Breaking Bad', rate: 95 },
      { title: 'Game Of Thrones', rate: 94 },
      { title: 'Jessica Jones', rate: 92 },
      { title: 'Stranger Things', rate: 94 },
      { title: 'The Walking Dead', rate: 81 }
    ];
  });

  it('should return tv shows titles', () => {
    expect(main.tvShowsTitles(tvShows)).toEqual([
      'BLACK MIRROR',
      'BREAKING BAD',
      'GAME OF THRONES',
      'JESSICA JONES',
      'STRANGER THINGS',
      'THE WALKING DEAD'
    ]);
  });

  it('should return tv shows with rate greater than 93', () => {
    expect(main.greatTVShows(tvShows, 93)).toEqual([
      { title: 'Black Mirror', rate: 96 },
      { title: 'Breaking Bad', rate: 95 },
      { title: 'Game Of Thrones', rate: 94 },
      { title: 'Stranger Things', rate: 94 }
    ]);
  });

  it('should return tv shows average rate', () => {
    expect(main.tvShowsAverageRate(tvShows)).toBe(92);
  });

  describe('tvShowsSortedBy', () => {
    let unsortedTVShows;

    beforeEach(() => {
      unsortedTVShows = [
        { title: 'Game Of Thrones', rate: 94 },
        { title: 'Black Mirror', rate: 96 },
        { title: 'Stranger Things', rate: 94 },
        { title: 'Jessica Jones', rate: 92 },
        { title: 'Breaking Bad', rate: 95 },
        { title: 'The Walking Dead', rate: 81 }
      ];
    });

    it('should return tv shows sorted by title', () => {
      expect(main.tvShowsSortedBy(unsortedTVShows, 'title')).toEqual([
        { title: 'Black Mirror', rate: 96 },
        { title: 'Breaking Bad', rate: 95 },
        { title: 'Game Of Thrones', rate: 94 },
        { title: 'Jessica Jones', rate: 92 },
        { title: 'Stranger Things', rate: 94 },
        { title: 'The Walking Dead', rate: 81 }
      ]);
    });

    it('should return tv shows sorted by rate', () => {
      expect(main.tvShowsSortedBy(unsortedTVShows, 'rate')).toEqual([
        { title: 'The Walking Dead', rate: 81 },
        { title: 'Jessica Jones', rate: 92 },
        { title: 'Game Of Thrones', rate: 94 },
        { title: 'Stranger Things', rate: 94 },
        { title: 'Breaking Bad', rate: 95 },
        { title: 'Black Mirror', rate: 96 }
      ]);
    });
  });
});
