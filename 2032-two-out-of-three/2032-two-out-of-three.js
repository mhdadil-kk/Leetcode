/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    let count = {};

    for (let n of new Set(nums1)) count[n] = (count[n] || 0) + 1;
    for (let n of new Set(nums2)) count[n] = (count[n] || 0) + 1;
    for (let n of new Set(nums3)) count[n] = (count[n] || 0) + 1;

    let result = [];
    for (let n in count) {
        if (count[n] >= 2) result.push(Number(n));
    }

    return result;
};