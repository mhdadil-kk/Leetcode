/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let seen = {}
    let result =[]
    for(let i=0;i<nums.length ;i++){
        if(seen[nums[i]]){
            seen[nums[i]]++
            result.push(nums[i])
        }else{
            seen[nums[i]] = 1
        }
    }

    return result
};