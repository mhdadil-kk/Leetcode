/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let arr = s.split(' ')
     arr.sort((a, b) => {
        return parseInt(a[a.length - 1]) - parseInt(b[b.length - 1]);
    });
    let newarr = []
    
    for(let i=0;i<arr.length ;i++){
        let str = arr[i].split('');
        str.pop()
        newarr.push(str.join(''));
    }

    return newarr.join(' ')
};