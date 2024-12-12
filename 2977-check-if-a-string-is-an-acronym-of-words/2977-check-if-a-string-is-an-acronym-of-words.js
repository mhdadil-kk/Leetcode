/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
  return s === words.map((word)=>[word[0]]).join('')
};