/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let arr1 = s1.split(' ')
    let arr2 = s2.split(' ')
    let result = []
    for(let i=0 ;i<arr1.length ; i++){
       let morethanone = false
       for(let j=0 ;j<arr1.length ;j++){
           if(arr1[i]===arr1[j]&&i!=j){
            console.log(true,arr1[i])
             morethanone = true
           }
       }

        if(!arr2.includes(arr1[i])&&morethanone==false){
            if(!result.includes(arr1[i])){
               result.push(arr1[i])
            }
        }
    }

    for(let i=0 ;i<arr2.length ; i++){
          let morethanone2 = false
         for(let j=0 ;j<arr2.length ;j++){
           if(arr2[i]===arr2[j]&&i!=j){
            console.log(true)
             morethanone2 = true
           }
       }
        if(!arr1.includes(arr2[i])&&morethanone2==false){
            if(!result.includes(arr2[i])){
               result.push(arr2[i])
            }
        }
    }
    
    

   return result
};