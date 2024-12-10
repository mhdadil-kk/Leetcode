/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
   let count = 0
   for(let row of grid){
    let left = 0 ,right = row.length-1
      while(left<=right){
        let mid = Math.floor((left+right)/2)
        if(row[mid]<0){
            right = mid -1
        }else{
            left = mid +1
        }
      }
      count += row.length - left
   }
   return count
};