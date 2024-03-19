/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

iteracion = arr.map(function(element){
    if (element % 2 == 1) {
        result.splice(0, 0, element);
        return element;
    }else{
        return null;
    }
});

console.log("result: ", result);

//export result
module.exports = result;