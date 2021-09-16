
/////////////////////////////////////////////NIVELL 1///////////////////////////////////////////////////////////////


var array = ["A", "N", "T", "O", "N", "I", "O"];

for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}                                        // Exercici 1

/////////////////////////////////////////////////////////////////////////////////////

/*
var array = ["A", "N", "T", 3, "O", "N", "I", "O"];



for (var i = 0; i < array.length; i++) {
    if (array[i] == "A" || array[i] == "E" || array[i] == "I" || array[i] == "O" || array[i] == "U") {
        console.log("He trobat la VOCAL " + array[i]);
    } if (array[i] == "N" || array[i] == "T") {
        console.log("He trobat la CONSONANT " + array[i]);
    } if (typeof array[i] === "number") {
        console.log("Els noms de persones no contenen el número: " + array[i]);
    }
}

*/

var array = ["A", "N", "T", 3, "O", "N", "I", "O"];

var vocal = "AEIOU";

var consonant = "BCDFGHJKLMNÑPQRSTWXYZ";


for (var i = 0; i < array.length; i++) {
    if (vocal.indexOf(array[i]) != -1) {
        console.log("He trobat la VOCAL " + array[i]);
    } if (consonant.indexOf(array[i]) != -1) {
        console.log("He trobat la CONSONANT " + array[i]);
    } if (typeof array[i] === "number") {
        console.log("Els noms de persones no contenen el número: " + array[i]);
    }

}                                                                              ///////////////// Exercici 2

/////////////////////////////////////////////////////////////////////////////////////

/*

var array = { "A": 1 };

var contador = 0;

var resultado = [];

console.log(array.map((function (x) {
    return x * 2;
})));



*/


///////////////////////////////////////////////////////////////////////////////////////

var nombre = ["A", "N", "T", "O", "N", "I", "O"];

var apellido = ["O", "L", "I", "V", "E", "R"];

var apellido2 = apellido.unshift(" ");

var fullName = nombre.concat(apellido);

console.log(fullName);                 ////////////////////////////////////  Exercici 4


//////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// NIVELL 2  ////////////////////////////////////////////////

// EXPLRESIONES REGULARES

var str = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email';

function extraerEmails ( text ){
    
    return text.match(/([a-zA-Z0-9._-]+@[a-zA-ZñÑ0-9._-]+)/gi);

}

var emails = extraerEmails(str);

    for (var i = 0; i < emails.length; i++) {
        console.log(emails[i]);
    }                                       


console.log(emails);

for (var i = 0; i < emails.length; i++) {
    if (emails.indexOf(emails[i]) !== i) {
        emails.splice(i,1)}}

        for (var i = 0; i < emails.length; i++) {
            console.log(emails[i]);
        }                                       


console.log(emails);
      



























