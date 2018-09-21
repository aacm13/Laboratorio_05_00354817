var numero=prompt("ingresar numero: ")
absoluto(numero);
function absoluto(numero){
    if(numero>0){
        return numero;
    }else{
        return (numero*-1);
    }
}