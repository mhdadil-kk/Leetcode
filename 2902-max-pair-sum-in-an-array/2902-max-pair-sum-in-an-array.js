/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    let arr = Array(10).fill(-1);
    let maxSum = -1;
    for(num of nums){
        let maxDigit = Math.max(...num.toString().split('').map(i=> +i));
        if(arr[maxDigit] != -1){
            maxSum = Math.max(maxSum, arr[maxDigit] + num)
        }
        arr[maxDigit] = Math.max(arr[maxDigit], num)
    }
    return maxSum
};