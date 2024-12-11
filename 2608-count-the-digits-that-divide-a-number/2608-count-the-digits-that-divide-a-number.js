/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
   let array=num.toString().split("").map(Number)
   console.log(array)
    
  let arr=[];
    for(let i=0;i<array.length;i++){
        if(num%array[i]===0)
        
            arr.push(array[i])
        
    }  return arr.length
    
};