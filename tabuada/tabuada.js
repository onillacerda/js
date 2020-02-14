/**
 *  JS- Tabuada
 * @autor Nilson Lacerda
 */

//  var valor = 9;

for (var i = 1; i < 11; i++){
    // document.write(valor + " x " + i + " = " + (valor * i) + "<br>");
    document.write("<p>Tabuada do " + i + "</p>");
    for (var j = 1; j <11; j++){
        document.write(i + " x " + j + " = " + (i * j) + "<br>");
    }
}