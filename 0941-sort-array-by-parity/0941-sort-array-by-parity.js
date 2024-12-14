/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let newArr=[];
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==0){
            if(nums[i]%2===0){
                newArr.unshift(nums[i])
            }
            else{
                newArr.push(nums[i])
            }
            

            }
             else{
            newArr.unshift(0)
        }
       
        }
    return newArr
}
