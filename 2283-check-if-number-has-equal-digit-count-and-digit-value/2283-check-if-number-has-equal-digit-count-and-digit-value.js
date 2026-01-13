/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
    let arr = num.split('');
    for(let i=0;i<arr.length ;i++){
        let count = 0
        for(let j=0;j<arr.length; j++){
            if(i===Number(arr[j])) count++
        }
        if(count !== Number(arr[i])) return false
    }

    return true
};