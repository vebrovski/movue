import MovueApi from "@src/utils/auth";
import request from "@src/utils/request";

const api = new MovueApi();

/**
 *
 * @param mediaType - movie, tv, person.
 * @param id - item id.
 * @param listType
 * @returns {Promise} Promise object represents data from api call.
 */
const getItem = (mediaType, id, listType = '') => {
  const mediaTypes = (['tv', 'movie', 'person']);

  if (!mediaTypes.includes(mediaType)) {
    throw new Error(`Only ${mediaTypes.map(type => `"${type}"`).join(', ')} media types are allowed.`);
  }

  if (listType) {
    return request(`${api.baseUrl}/${api.version}/${mediaType}/${id}/${listType}?api_key=${api.getApiKey()}`)
  } else {
    return request(`${api.baseUrl}/${api.version}/${mediaType}/${id}?api_key=${api.getApiKey()}`)
  }
};

export default getItem;
