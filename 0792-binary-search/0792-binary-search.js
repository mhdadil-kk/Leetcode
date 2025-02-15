/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length -1
    for(let i=0 ; i<nums.length ; i++){
        let mid = Math.floor((left+right)/2)
        if(nums[mid]===target)return mid
        else if(nums[mid]<target){
            left = i+1
        }else{
            right = i-1
        }
    }
    return -1
};