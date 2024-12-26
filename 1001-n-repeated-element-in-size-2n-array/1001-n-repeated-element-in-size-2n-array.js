/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
    let unique=[];
    for(let i of nums){
        if(unique.includes(i)){
            return i
        }
        else{
            unique.push(i)
        }
    }
};