/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
     let max = 0
    for(let i=0 ;i<nums.length ;i++){
        for(let j=i+1 ; j<nums.length ; j++){
            if(nums[i]<nums[j] && i<j<nums.length){
            if(nums[j] - nums[i] >max){
                max = nums[j] - nums[i]
            }
            }
        }
    }
    if(max){
        return max
    }else{
        return -1
    }
};