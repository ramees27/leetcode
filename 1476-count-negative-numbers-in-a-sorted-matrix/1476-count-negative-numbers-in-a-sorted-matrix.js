/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count=0;
    let arr1= grid.flat()
   for(let i=0;i<arr1.length;i++){
    if(arr1[i]<0){
        count++
    }
   }
   return count
};