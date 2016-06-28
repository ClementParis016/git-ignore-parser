'use strict';

function removeTrailingWhitespace(str) {
  /**
   * @FIX: We have an issue here, because training whitespace preceeded by a "\"
   * should not be removed.
   */
  if (!/\\\s+$/.test(str)) {
    return str.replace(/\s+$/, '');
  }
}

function trimSlashes(str) {
  let output = str;
  if (output.charAt(0) === '/') {
    output = output.substr(1);
  }
  if (output.charAt(output.length - 1) === '/') {
    output = output.substr(0, output.length - 1);
  }
  return output;
}

function isWhitespace(str) {
  return /^\s*$/.test(str);
}

function startsWithChar(str, char) {
  return new RegExp(`^${char}+.*$`).test(str);
}

module.exports = {
  trimSlashes: trimSlashes,
  removeTrailingWhitespace: removeTrailingWhitespace,
  isWhitespace: isWhitespace,
  startsWithChar: startsWithChar
};