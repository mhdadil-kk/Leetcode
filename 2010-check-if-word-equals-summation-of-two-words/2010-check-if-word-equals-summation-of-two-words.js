/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
  const alphabet = {
        'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6,
        'h': 7, 'i': 8, 'j': 9, 'k': 10, 'l': 11, 'm': 12, 'n': 13,
        'o': 14, 'p': 15, 'q': 16, 'r': 17, 's': 18, 't': 19,
        'u': 20, 'v': 21, 'w': 22, 'x': 23, 'y': 24, 'z': 25
    };

    function wordToNumber(word) {
        let numStr = '';
        for (let i = 0; i < word.length; i++) {
            numStr += alphabet[word[i]];
        }
        return Number(numStr);
    }

    const num1 = wordToNumber(firstWord);
    const num2 = wordToNumber(secondWord);
    const target = wordToNumber(targetWord);

    return num1 + num2 === target
};