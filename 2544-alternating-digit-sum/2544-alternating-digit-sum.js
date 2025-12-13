/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    let arr = n.toString().split('')    
    let sum = 0
    for(let i=0;i<arr.length ;i++){
      if(i%2===0){
       num = +Number(arr[i])
      }else{
        num = -Number(arr[i])
      }
      sum = sum+num
    }

    return sum

};