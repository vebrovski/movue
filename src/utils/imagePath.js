const imageBasePath = '//image.tmdb.org/t/p';

/**
 *
 * @param path
 * @param size
 * @returns {string}
 */
export const imagePath = (path, size) => {
  if (path) {
    return `${imageBasePath}/${size}/${path}`;
  }
};