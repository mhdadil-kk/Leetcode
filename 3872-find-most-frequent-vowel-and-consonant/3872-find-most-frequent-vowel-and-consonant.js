/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let freq = {}
    let vowels = new Set([ 'a', 'e', 'i', 'o','u']);
    for(let char of s){
      if(freq[char]){
        freq[char] ++
      }else{
        freq[char] = 1
      }
    }
   let maxFreqVowels =0
   let maxFreq = 0

   for(let [char,count] of Object.entries(freq)){
     if(vowels.has(char)){
        maxFreqVowels = Math.max(maxFreqVowels,count)
     }else {
       maxFreq = Math.max(maxFreq,count)
     }
   }

   return maxFreq + maxFreqVowels


};