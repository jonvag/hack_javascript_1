/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * 1) anexar al array result los items [bar,baz,qux]
 * 2) los 2 primeros items reescribir el caracter "a" por @
 * modificar el último item "quz" a mayúscula
 *  
 * 
 * output => ["b@r","b@z","QUX"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

for (let i = 0; i < arr.length; i++) {

    //eliminamos primero y ultimo elemento
    if (i == 0 || i == arr.length - 1) {
        //para esto no hace nada
    } else if(i == arr.length - 2) {
        //al penultimo registro se le coloca mayuscula
        //console.log("tengo -2",arr[i].toUpperCase())
        result.push(arr[i].toUpperCase())
    }else {
        str = arr[i];
        let str_arroba = "";
        //colocamos @ en las a
        for (let j = 0; j < str.length; j++) {
            if (str[j] == "a") {
                str_arroba = str_arroba + "@"
            } else {
                str_arroba = str_arroba + str[j]
            }
        }
        //console.log(str_arroba)
        result.push(str_arroba)
    }
}


console.log("result ", result)


//export result
module.exports = result;