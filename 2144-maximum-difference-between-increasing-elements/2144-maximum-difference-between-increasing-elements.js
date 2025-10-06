/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let maxdiff = []
    let n = nums.length
    for(let i=0 ;i<n ; i++){
        for(let j=i+1 ; j<n ;j++){
                if(nums[i] < nums[j]){
                      maxdiff.push(nums[j] - nums[i])
                }
        }
    }

     if(maxdiff.length ==0){
        return -1
     }else{
        return Math.max(...maxdiff)
     }
};