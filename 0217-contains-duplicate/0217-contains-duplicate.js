/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let newArr1=[...new Set(nums)]
    return newArr1.length!==nums.length
};