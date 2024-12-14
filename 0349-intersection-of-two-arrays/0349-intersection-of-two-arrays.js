/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let s1 = new Set(nums1)
    let s2 = new Set(nums2)
   let res = []
   for(let n of s1){
    if(s2.has(n)) res.push(n)
   }
   return res
};