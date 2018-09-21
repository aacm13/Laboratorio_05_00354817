var radio = prompt('ingresar radio: ');
area(radio);
function area(radio){
    do{
        if(radio>0){
            var resultado = Math.PI*Math.pow(radio,2);
        }else{
            return "Error, ingresar radio mayor a 0"
        }
    }while(radio<0);
    
    return resultado;
}