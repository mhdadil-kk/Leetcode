/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    const segments = s.split(' ').filter(segment => segment.trim() !== '');
    return segments.length;
};