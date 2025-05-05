/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
      const a = haystack.length; 
      const b = needle.length;
      
      for(let i=0 ; i<=a-b ;i++){
          if(haystack.slice(i,i+b)===needle){
            return i
          }
      }

      return -1

};