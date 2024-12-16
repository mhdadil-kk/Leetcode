/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
  for(let i=0 ; i<k; i++){
    let minIndex = nums.indexOf(Math.min(...nums));
     nums[minIndex] *=multiplier 
  }
  return nums
};