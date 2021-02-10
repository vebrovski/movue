import axios from "axios";

/**
 * @param url
 * @returns {Promise<AxiosResponse<T>>}
 */
export default async function request(url) {
  try {
    return await axios.get(url);
  } catch (error) {
    console.log(error.message);
  }
}
