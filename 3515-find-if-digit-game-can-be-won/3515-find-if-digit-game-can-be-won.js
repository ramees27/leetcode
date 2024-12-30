/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let arr1 = [];
    let arr2 = [];

   
    for (let i of nums) {
        if (i > 9) {
            arr1.push(i);
        } else {
            arr2.push(i);
        }
    }
    
    let sum1 = arr1.reduce((acc, num) => acc + num, 0);
    let sum2 = arr2.reduce((acc, num) => acc + num, 0);

   
    if (sum1 === sum2) {
        return false;
    }  else 
        return true;
    
};


