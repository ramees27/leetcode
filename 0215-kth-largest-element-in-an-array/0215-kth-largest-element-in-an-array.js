/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
let num=nums.sort((a,b)=>b-a)
return num[k-1]
};



