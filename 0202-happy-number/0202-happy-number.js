/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
   let seen = [];

    while (n !== 1) {
        if (seen.includes(n)) return false;
        seen.push(n);

        let sum = 0;
        while (n > 0) {
            let d = n % 10;
            sum += d * d;
            n = Math.floor(n / 10);
        }

        n = sum;
    }

    return true;
};