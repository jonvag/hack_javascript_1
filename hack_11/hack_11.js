/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */
let numberArray = [1,2,3,4,5];
let stringArray = ["foo","bar","baz","qux","echo"]
let result = [];
let numberArray_trans = [];
let stringArray_trans = [];

//se cambia 1 3 y 5 a letras
for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] == 1){
        numberArray_trans.push("one");
    }else if (numberArray[i] == 3){
        numberArray_trans.push("three");
        
    } else if (numberArray[i] == 5){
        numberArray_trans.push("five");
        
    } else {
        numberArray_trans.push(numberArray[i]);

    }
    
}

for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] == "foo") {
        stringArray_trans.push("f00");
    } else if (stringArray[i] == "bar") {
        stringArray_trans.push("Bar");
    } else if (stringArray[i] == "baz") {
        stringArray_trans.push("b@z");
    } else if (stringArray[i] == "qux") {
        stringArray_trans.push("quX");
    } else if (stringArray[i] == "echo") {
        stringArray_trans.push("3ch0");
    } else {
        stringArray_trans.push(stringArray[i]);
    }
}
console.log("stringArray_trans: ", stringArray_trans );


numberArray_trans.splice(0, 0, "h@ck");
numberArray_trans.push("h@ck");
result = numberArray_trans.concat(stringArray_trans);
result.push("h@ck");

console.log("result: ", result);
//export result
module.exports = result;