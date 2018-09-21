var numero = prompt('ingrese numero')
fibonacci(numero);
function fibonacci(numero){
    var var1 = 0;
    var var2 = 1;
    var var3;
    
    var result= var1+" "+var2+" ";
 
    for(var i=3; i <= numero;i++){
        var3 = var1 + var2;
        var1 = var2;
        var2 = var3;
        result = result + var3+" "
        
    }
    return result;
}