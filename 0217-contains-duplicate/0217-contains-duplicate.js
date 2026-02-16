/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
 let arr = new Set()
 
 for(let num of nums){
    if(arr.has(num)){
        return true
    }else{
        arr.add(num)
    }
 }
 return false

}
