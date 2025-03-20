/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
  let result = [];

    function backtrack(temp, used) {
        if (temp.length === nums.length) {
            result.push([...temp]); // Store a copy of temp
            return;
        }
        
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue; // Skip already used numbers
            
            temp.push(nums[i]);
            used[i] = true;
            
            backtrack(temp, used);
            
            temp.pop(); // Backtrack
            used[i] = false;
        }
    }

    backtrack([], Array(nums.length).fill(false));
    return result;

};