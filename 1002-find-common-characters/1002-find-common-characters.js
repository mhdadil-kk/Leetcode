/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let result = []

    for(let char of new Set(words[0])){
          let mincount = Infinity
          
        for(let word of words){
            let count = word.split(char).length-1
            
            mincount = Math.min(count,mincount)
        }

        for(let i=0;i<mincount ;i++){
            result.push(char)
        }
    }
    return result
};