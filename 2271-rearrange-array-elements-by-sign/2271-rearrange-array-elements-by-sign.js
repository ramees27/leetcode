/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let neg=[];
    let pos=[];
    let result=[];
    for(let i of nums)
        i<0?neg.push(i):pos.push(i)
    
    
    for(let k=0;k<neg.length;k++){
        result.push(pos[k],neg[k])
    }
    
    return result
    console.log(result)
};