/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

for (let i = 0; i < arr.length; i++) {
    let mayuscula = arr[i];
    let cadena = mayuscula[0].toUpperCase() + mayuscula.slice(1);
    result.push(cadena)
    
}
console.log("result ", result);


//export result
module.exports = result;