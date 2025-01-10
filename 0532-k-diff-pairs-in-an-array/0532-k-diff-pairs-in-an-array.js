/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
   if(k<0) return 0;

   const seen = new Set()
   const pairs = new Set()

   for(let num of nums){
    if(seen.has(num -k)){
        pairs.add(num-k);
    }

    if(seen.has(num+k)){
        pairs.add(num)
    }
    seen.add(num)
   }
   return pairs.size;
};