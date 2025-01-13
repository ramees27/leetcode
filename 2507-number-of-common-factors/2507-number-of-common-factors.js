/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let x=0;
    let bc= a<b? a:b;
    console.log(bc)
    for(let i=0;i<=bc;i++){
        if(a%i==0&&b%i==0){
             x++;
        }

    }
    return x
};