/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
 let res=   x<0?(x.toString().split("").slice(1).reverse().join(''))*-1:
     (x.toString().split("").reverse().join(''))
    if (res < -2147483648 || res > 2147483647) {
        return 0;
    }
      else{
        return Number(res)
      }  
   
     
     
   
   
};