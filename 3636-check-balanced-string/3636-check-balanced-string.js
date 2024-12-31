/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    let arr1=num.split("")
    let evenarr=[]
    let oddarr=[]
    
    for(let i in arr1){
        if(i%2===0){
         evenarr.push(Number(arr1[i]))
        }else{
            oddarr.push(Number(arr1[i]))
        }
        
    }
    const evensum=evenarr.reduce((acc,y)=>acc+y)
     const oddsum=oddarr.reduce((acc,y)=>acc+y)
    return evensum===oddsum
};