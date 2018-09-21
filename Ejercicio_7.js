var anho = prompt('ingresar año');
bisiesto(anho);
function bisiesto(anho){
    if ((anho %4 == 0) && (anho%100!=0)){
        return "Es Bisiesto"
    }else if((anho %100 == 0) && (anho%400==0)){
        return "Es Bisiesto"
    }else{
        return "No es Bisiesto"
    }
}