'use strict';

const utils = require('./utils');

module.exports = function(input) {
  let output = [];

  // Create an array of entries from raw input
  const entries = input.split(/\n/);

  entries.forEach(entry => {
    let cleaned;

    if (!(utils.isWhitespace(entry) || utils.startsWithChar(entry, '#'))) {
      cleaned = utils.removeTrailingWhitespace(entry);
      cleaned = utils.trimSlashes(cleaned);
      if (!output.includes(cleaned)) {
        output.push(cleaned);
      }
    }
  });

  return output;
}