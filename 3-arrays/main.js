/**
 * This function should return a list of tv shows titles
 * - for loop is forbidden
 * - forEach is forbidden
 */
const tvShowsTitles = tvShows => {
  return tvShows.map(tvs => tvs.title.toUpperCase());
};

/**
 * This function should return a list of the tv shows where rate is greater than the given rate
 * - for loop is forbidden
 * - forEach is forbidden
 */
const greatTVShows = (tvShows, rate) => {
  return tvShows.filter(tvs => tvs.rate > rate);
};

/**
 * This function should return the average rate of the list of tv shows
 * - for loop is forbidden
 * - forEach is forbidden
 */
const tvShowsAverageRate = tvShows => {
  const totalRates = tvShows.reduce((sum, current) => sum += current.rate, 0);
  return totalRates / tvShows.length;
};

/**
 * This function should return a list of the tv shows sorted by a given key (title or rate)
 */
const tvShowsSortedBy = (tvShows, key) => {
  const tvShowsCopy = tvShows.slice();

  tvShowsCopy.sort((a, b) => {
    if (a[key] > b[key]) {
      return 1;
    }
    if (a[key] < b[key]) {
      return -1;
    }
    return 0;
  });
  return tvShowsCopy;
};

module.exports = {
  tvShowsTitles,
  greatTVShows,
  tvShowsAverageRate,
  tvShowsSortedBy
};

