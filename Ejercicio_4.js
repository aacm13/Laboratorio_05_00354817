var numero=prompt('ingresar numero decimal: ');
function binario(numero){
    var result="";
    while(numero >= 1 ){
        numero= numero/2;
        if(numero%2==0){
            result = result+"1";
        }else{
            result = result + "0";
        }

    }
    return result;
}