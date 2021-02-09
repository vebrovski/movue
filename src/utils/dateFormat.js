import moment from "moment-mini";

/**
 *
 * @param value
 * @param format
 * @returns {string}
 */
export const dateFormat = (value, format) => {
  return moment(value).format(format);
};