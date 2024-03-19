/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];
let arr = [1, 2, 3, 4, 5, 6, 7, 8];

iteracion = arr.map(function(element){
    if (element % 2 == 1) {
        return element;
    }else{
        return null;
    }
    
});

result = iteracion.filter(item =>  item != null);
console.log("result: ", result);


//export result
module.exports = result;