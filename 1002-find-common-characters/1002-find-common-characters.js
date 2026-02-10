/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let result = [];

    for (let ch of new Set(words[0])) {
        let minCount = Infinity;

        for (let word of words) {
            let count = word.split(ch).length - 1;
            minCount = Math.min(minCount, count);
        }

        for (let i = 0; i < minCount; i++) {
            result.push(ch);
        }
    }

    return result;
};
