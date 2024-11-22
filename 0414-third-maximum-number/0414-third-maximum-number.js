/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const unique=[...new Set(nums)]
    const sort=unique.sort((a,b)=>b-a)
    return sort.length>=3?sort[2]:sort[0]
};