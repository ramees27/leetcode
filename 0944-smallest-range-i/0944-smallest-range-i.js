/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    let maxNum=Math.max(...nums);
    let minNum=Math.min(...nums);
    let dif=(maxNum-k)-(minNum+k)
    return dif>=0?dif:0;
};
