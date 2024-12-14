/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    numArr=nums.map(num=>Math.abs(num))
    sortedArr=numArr.sort((a,b)=>a-b)
    sqrArr=sortedArr.map(num=>num**2)
   return sqrArr
    
    
    
};