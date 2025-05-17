/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let result = "";

    const expand = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > result.length) result = s.slice(left, right + 1)
            left--;
            right++;
        }
    }

    for(let i=0 ;i<s.length;i++){
        expand(i,i);
        expand(i,i+1)
    }
    return result
};