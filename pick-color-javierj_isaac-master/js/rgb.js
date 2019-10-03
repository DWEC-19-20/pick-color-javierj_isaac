'use strict';

document.getElementById("enviar").addEventListener("click",function(e){
   var r = document.getElementById("r").value;
   var g = document.getElementById("g").value;    
   var b = document.getElementById("b").value;    
   
   var valorHex = rgb(r,g,b);
   document.getElementById("hex").value = valorHex;
     // alert(valorHex);
    
    var valorHex2=document.getElementById("hex2").value;
    
    var r1 = hex(valorHex2.substring(0,2),16);
    
    document.getElementById("prueba").value=r1;

});

/* Función que al pasar un valor RGB devuelva el resultado en representación hexadecimal
*/
function rgb(r,g,b) {
    var rr1=Math.floor(r/16);
    var rr2=r%16;
    var res1=rr1.toString(16)+rr2.toString(16);
    
    var gg1=Math.floor(g/16);
    var gg2=g%16;
    var res2=gg1.toString(16)+gg2.toString(16);
    
    var bb1=Math.floor(b/16);
    var bb2=b%16;
    var res3=bb1.toString(16)+bb2.toString(16);
    
    
    return "#"+res1+res2+res3;
    
}

/* Función que al pasar un valor RGB en representación hexadecimal
   devuelve la representación en formato decimal con el formato RRRGGGBB
*/
function hex(valor) {
    
   /* valorHex2=valorHex2.replace('#','');
   var r = parseInt(valorHex2.substring(0,2), 16);
   var g = parseInt(valorHex2.substring(2,4), 16);
   var b = parseInt(valorHex2.substring(4,6), 16);*/
    
    var hex= parseInt(valor).toString(16);
    

   
   return hex.length == 1 ? "0" + hex : hex;
    
    //return r+""+g+""+b;
}

