/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function (nums) {
    function digSum(n) {
        let sum = 0;
        while (n > 0) {
            sum += n % 10
            n = Math.floor(n / 10);
        }


        return sum
    }

    let min = Infinity;

    for (let num of nums) {
        let replaced = digSum(num);
        if (replaced < min) min = replaced
    }

    return min
}