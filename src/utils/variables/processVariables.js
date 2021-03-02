const vars = require('../../../theme.variables.js');
const { createList, createMediaList, assignToCustomProps } = require('./createVariables');

module.exports = {
  customProperties: {
    ...createList(vars.colors, '--', 'Color'),
    '--fontSize': `${vars.globals.fontSize}px`,
    '--fontWeight': `${vars.globals.fontWeight}`,
    '--lineHeight': `${vars.globals.lineHeight}`,
  },
  globalStyles: assignToCustomProps(Object.keys(vars.globals)),
  brandingColors: assignToCustomProps(Object.keys(vars.colors), '', 'Color'),
  mediaQueries: createMediaList(vars.breakpoints),
  ...vars,
};
