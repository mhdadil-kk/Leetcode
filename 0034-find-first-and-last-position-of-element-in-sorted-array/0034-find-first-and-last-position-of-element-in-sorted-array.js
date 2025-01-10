/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const binarySearch =(isFirst)=>{
     let left =0
     let right = nums.length-1
     let result = -1
     
     while(left<= right){
        const mid = Math.floor((left+right)/2);

        if(nums[mid]===target){
            result = mid
            if(isFirst){
                right = mid-1
            }else{
                left = mid +1
            }
        }else if(nums[mid] <target){
            left = mid +1
        }else{
            right = mid -1
        }
     };
      return result
    }
    const first =binarySearch(true)
    const last =binarySearch(false)
    return [first,last]
};