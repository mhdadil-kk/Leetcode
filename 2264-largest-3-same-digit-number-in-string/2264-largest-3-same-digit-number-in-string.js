/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let arr = []
    for(let i=0;i<num.length ;i++){
      let str =""
       for(let j=i ;j<=i+2 ;j++){
        if(num[i]===num[j]){
          str = str+num[i]
        }
       }
       if(str.length == 3){
         arr.push(str)
       }
       
    }
     console.log(arr)
   if(arr.length){
    let a = Math.max(...arr).toString()
    if(a=='0'){
        return '000'
    }else{
        return a
    }
   }else{
    return ""
   }
};