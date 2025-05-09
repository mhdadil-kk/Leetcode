/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let result = []
    let temp = []
    for(let i=0;i<arr2.length;i++){
        for(let j=0;j<arr1.length;j++){
           if(arr1[j]===arr2[i]){
            result.push(arr1[j])
           }
            
        }
    }

    for(let i=0;i<arr1.length;i++){
        if(!arr2.includes(arr1[i])){
              temp.push(arr1[i])
            }
    }
    temp.sort((a,b)=>a-b)
    return [...result,...temp]
};