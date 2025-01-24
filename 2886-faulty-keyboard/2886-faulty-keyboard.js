/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let arr1=s.split("")
    let arr2=[];
    
    for(let k=0;k<arr1.length;k++){
        if(arr1[k]=="i"){
            arr2.reverse()
        }
       else{
        arr2.push(arr1[k])
       }
    }
    return arr2.join("")
};