import MovueApi from "@src/utils/auth";
import request from "@src/utils/request";
import getItem from "@src/utils/requests/getItem";

const api = new MovueApi();

/**
 * Request to get items.
 * @param mediaType - movie, tv, person.
 * @param listType for movies - latest, now_playing, popular, top_rated, upcoming.
 * @param listType for tv - latest, airing_today, on_the_air, popular, top_rated.
 * @param listType for person - latest, popular.
 * @param query - query string, ex. language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1.
 * @returns {Promise<AxiosResponse<T>>}
 */
export const getItems = (mediaType, listType, query = '') => {
  if (query) {
    return request(`${api.baseUrl}/${api.version}/${mediaType}/${listType}?api_key=${api.getApiKey()}&${query}`)
  } else {
    return request(`${api.baseUrl}/${api.version}/${mediaType}/${listType}?api_key=${api.getApiKey()}`)
  }
};

/**
 *
 * @param type
 * @param query
 */
export const searchItems = (type, query) => {
  return request(`${api.baseUrl}/${api.version}/search/${type}?api_key=${api.getApiKey()}&query=${query}`)
};

/**
 * Request to get trending items.
 * @param mediaType - all, movie, tv, person.
 * @param timeWindow - day, week.
 * @returns {Promise<AxiosResponse<T>>}
 */
export const getTrendingItems = (mediaType, timeWindow) => {
  return request(`${api.baseUrl}/${api.version}/trending/${mediaType}/${timeWindow}?api_key=${api.getApiKey()}`)
};


/**
 *
 * @param mediaType - movie, tv
 * @param listType -
 * @returns {Promise<AxiosResponse<T>>}
 */
export const getItemsWithTrailers = (mediaType, listType) => {
  return request(`${api.baseUrl}/${api.version}/${mediaType}/${listType}?api_key=${api.getApiKey()}`)
    .then(response => {
      const results = response.data.results;

      results.forEach((result) => {
        return getItem(mediaType, result.id, 'videos');
      });
    });
};
