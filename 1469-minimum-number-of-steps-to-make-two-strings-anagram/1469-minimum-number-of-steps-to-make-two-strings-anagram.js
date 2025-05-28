/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let countS = new Array(26).fill(0);
    let countT = new Array(26).fill(0);

    for(let char of s ){
        countS[char.charCodeAt(0)-97]++
    }
    for(let char of t ){
        countT[char.charCodeAt(0)-97]++
    }
    
    let steps =0
    for(let i=0 ;i<26 ;i++){
        if(countS[i] > countT[i]){
         steps += countS[i] - countT[i]
        }
    } 

    return steps
};