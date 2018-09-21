var numero = [5, 10, 2, 7];
ordenar(numero);
function ordenar(numero) {
    for (var i = 0; i < numero.length ; i++) {
      for(var j = 0 ; j < numero.length - i - 1; j++){
      if (numero[j] > numero[j + 1]) {
        var temp = numero[j];
        numero[j] = numero[j+1];
        numero[j + 1] = temp;
      }
     }
    }
    return numero;
  }