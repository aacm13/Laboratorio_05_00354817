var numero=prompt('ingresar numero decimal: ');
binario(numero);
function binario(numero){
    var binary = parseInt(numero, 10);
    return binary.toString(2);
}
