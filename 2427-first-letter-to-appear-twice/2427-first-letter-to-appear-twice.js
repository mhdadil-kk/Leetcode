/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let seen = {}

    for(let i=0 ; i<s.length ;i++){
        if(seen[s[i]]){
            return s[i]
        }else{
            seen[s[i]] = 1
        }
    }

};