    /* CONVERTER CELSIUS */
  function converterc(){

   let valorc = document.getElementById("valorc").value;
   let contac = document.getElementById("contac").value;
   let resultado;

    if(contac=="f"){ 
    resultado = parseInt(valorc) * 9/5 + 32;
    document.getElementById("resultadoc").innerHTML =  resultado + " ºF";
    document.getElementById("equacaoc").innerHTML = "(" + valorc + " ºC" + " x 1,8) + 32 = " + resultado + " ºF";
    alert("Obs: 1,8 é igual a 9/5")
    }

    if(contac=="k"){ 
    resultado = parseInt(valorc) + 273;
    document.getElementById("resultadoc").innerHTML = resultado + " K";
    document.getElementById("equacaoc").innerHTML = valorc + " ºC" + " + 273 = " + resultado + " K";
    }

  }

  /* CONVERTER FAHRENHEIT */
  function converterf(){

   let valorf = document.getElementById("valorf").value;
   let contaf = document.getElementById("contaf").value;
   let resultado;
  
    if(contaf=="c"){
    resultado = parseInt(valorf - 32) * 5/9;
    document.getElementById("resultadof").innerHTML = resultado + " ºC";
    document.getElementById("equacaof").innerHTML = "(" + valorf + " ºF" + " - 32) x 5/9 = " + resultado + " ºC";
    alert("Obs: 5/9 é igual a 0,5555555555555556")
    }

    if(contaf=="k"){
    resultado = parseInt(valorf - 32) * 5/9 + 273;
    document.getElementById("resultadof").innerHTML = resultado + " K";
    document.getElementById("equacaof").innerHTML = "(" + valorf + " ºF" + " - 32) x 5/9 + 273 = " + resultado + " K";
    alert("Obs: 5/9 é igual a 0,5555555555555556")
    }

  }

  /* CONVERTER KELVIN */
  function converterk(){

   let valork = document.getElementById("valork").value;
   let contak = document.getElementById("contak").value;
   let resultado;
  
    if(contak=="c"){ 
    resultado = parseInt(valork) - 273;
    document.getElementById("resultadok").innerHTML = resultado + " ºC";
    document.getElementById("equacaok").innerHTML = valork + " K" + " - 273 = " + resultado + " ºC";
    }
    
    if(contak=="f"){
    resultado = parseInt(valork - 273) * 9/5 + 32;
    document.getElementById("resultadok").innerHTML = resultado + " ºF";
    document.getElementById("equacaok").innerHTML = "(" +valork + " K" + " - 273) x 9/5 + 32 = " + resultado + " ºF";
    alert("Obs: 9/5 é igual a 1,8")
    }
    
  }
