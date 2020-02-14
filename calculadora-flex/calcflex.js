/**
 *  JS- Calculadora Flex
 * @autor Nilson Lacerda
 */

var etanol, gasolina;

function calcular(){
    etanol = parseFloat(frmFlex.txtEtanol.value.replace(",","."));
    gasolina = parseFloat(frmFlex.txtGasolina.value.replace(",","."));
    if (etanol < 0.7 * gasolina){
            //verdadeiro
            document.getElementById("status").src="etanol.png";
    } else {
            //falso
            document.getElementById("status").src="gasolina.png";
        }
    
}

function resetar(){
    document.getElementById("status").src="neutro.png";
}
