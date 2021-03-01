/**
 * Creates custom properties from each entry in the passed object.
 *
 * @param {*} obj Provided object to transition into SCSS Variables
 * @param {string} pre A prefix to place in front of key
 * @param {string} post A suffix to place after the key
 * @param {string} unit A css unit (px, em, rem)
 */
const createList = (obj = {}, pre = '', post = '', unit = '') => {
  const props = {};
  Object.entries(obj).forEach(([key, value]) => {
    props[`${pre}${key}${post}`] = `${value}${unit}`;
  });
  return props;
};

/**
 * Creates custom media breakpoints from each entry in the passed object.
 *
 * @param {*} obj Provided object to transition into SCSS Variables
 */
const createMediaList = (obj = {}) => {
  const media = {};
  const keys = Object.keys(obj).sort((a, b) => obj[a] - obj[b]);
  const values = keys.map((key) => obj[key]);

  keys.forEach((key, i) => {
    const value = values[i];
    const min = `(min-width: ${value}px)`;
    const max = `(max-width: ${value - 0.02}px)`;

    // Exit if the bp value is 0
    if (value === 0) return;

    // Create min breakpoint
    media[`${key}`] = `"${min}"`;

    // Create max breakpoint
    media[`${key}-down`] = `"${max}"`;

    // Create only breakpoint (if not on max bp)
    if (key === 'max') return;
    const next = values[i + 1];
    media[`${key}-only`] = `"${min} and (max-width: ${next - 0.02}px)"`;
  });
  return media;
};

/**
 * Creates media breakpoints which powers the Breakpoints JS Module.
 *
 * @param {*} obj Provided object to transition into a breakpoints config object
 */
const getBreakpointsConfig = (obj = {}) => {
  const media = {};
  const keys = Object.keys(obj).sort((a, b) => obj[a] - obj[b]);
  const values = keys.map((key) => obj[key]);

  keys.forEach((key, i) => {
    const value = values[i];
    const settings = {
      min: value,
      max: null,
    };

    if (key === 'max') {
      settings.max = Infinity;
    } else {
      const next = values[i + 1];
      settings.max = next - 0.02;
    }

    media[key] = settings;
  });
  return media;
};

/**
 * Assigns custom property with the same name to each key in the passed array
 *
 * @param {array} keys Array containing keys to assign to the custom prop variable.
 */
const assignToCustomProps = (keys = [], pre = '', post = '') => {
  const props = {};
  keys.forEach((key) => {
    props[`${pre}${key}${post}`] = `var(--${pre}${key}${post})`;
  });
  return props;
};

module.exports = {
  createList,
  createMediaList,
  getBreakpointsConfig,
  assignToCustomProps,
};
