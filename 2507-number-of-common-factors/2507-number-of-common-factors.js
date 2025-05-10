/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
     let count = 0;
    let minVal = Math.min(a, b);
    
    for (let i = 1; i <= minVal; i++) {
        if (a % i === 0 && b % i === 0) {
            count++;
        }
    }
    return count
};