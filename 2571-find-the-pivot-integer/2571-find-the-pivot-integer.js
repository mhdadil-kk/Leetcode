/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    const totalSum = (n*(n+1)/2);

    let leftSum = 0;

    for(let x=1 ; x<=n ; x++){
        leftSum += x
        const rightSum = totalSum - leftSum +x
        if(rightSum === leftSum){
            return x
        }
    }

    return -1
};