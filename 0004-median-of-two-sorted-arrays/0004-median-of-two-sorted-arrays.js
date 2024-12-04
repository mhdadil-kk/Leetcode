/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [...nums1, ...nums2];
    
    arr.sort((a, b) => a - b);
    
    let len = arr.length;
    let median;

    if (len % 2 === 0) {
        median = (arr[len / 2 - 1] + arr[len / 2]) / 2;
    } else {
        median = arr[Math.floor(len / 2)];
    }
    
    return median;
};