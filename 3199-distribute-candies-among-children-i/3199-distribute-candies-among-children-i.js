/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
var distributeCandies = function(n, limit) {
    let count = 0
     for(let i=0;i<=Math.min(limit,n);i++){
        for(let j=0;j<=Math.min(limit,n-i);j++){
            let k  = n -i-j
            if(k>=0 && k <=limit ){
                count++;
            }
        }
     }
     return count
};