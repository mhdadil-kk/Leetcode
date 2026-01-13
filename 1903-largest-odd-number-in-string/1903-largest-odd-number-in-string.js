/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
  let arr = []
  for(let i=0;i<num.length ;i++){
    if(Number(num[i])%2 ===1){
      let str =  num.slice(0,i+1)
      arr.push(str)
    }
  }
  if(arr.length){
    return arr.reduce((a,b)=>a.length>b.length ? a:b)
  }else{
    return ""
  }
 

};  