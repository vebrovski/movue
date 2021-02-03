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
const getItem = async (mediaType, id, listType = '') => {
    const mediaTypes = (['tv', 'movie', 'person']);

    return new Promise((resolve, reject) => {
        if (!mediaTypes.includes(mediaType)) {
            reject(`Only ${mediaTypes.map(type => `"${type}"`).join(', ')} media types are allowed.`);
        }

        if (listType) {
            resolve(
                request(`${api.baseUrl}/${api.version}/${mediaType}/${id}/${listType}?api_key=${api.getApiKey()}`)
                    .then(response => response.data)
                    .catch(reason => reject(reason))
            )
        } else {
            resolve(
                request(`${api.baseUrl}/${api.version}/${mediaType}/${id}?api_key=${api.getApiKey()}`)
                    .then(response => response.data)
                    .catch(reason => reject(reason))
            )
        }
    });
};

export default getItem;
