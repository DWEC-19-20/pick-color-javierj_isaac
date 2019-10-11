    'use strict';



    document.getElementById("enviar").addEventListener("click", function (e) {
        var r = document.getElementById("r").value;
        var g = document.getElementById("g").value;
        var b = document.getElementById("b").value;

        // RGB a Hexadecimal

        var valorHex = rgb(r, g, b);

        var color = document.getElementById("color1");

        document.getElementById("hex").value = valorHex;

        color.style.backgroundColor = valorHex;

        // Hexadecimal a RGB   

        var valorHex2 = document.getElementById("hex2").value;


        var r1 = hex(valorHex2);

        document.getElementById("red").value = r1;


    });

    /* Función que al pasar un valor RGB devuelva el resultado en representación hexadecimal
     */

    function rgb(r, g, b) {
        if (r > 255 || g > 255 || b > 255) {
            if (r > 255) {
                r = 255;
            } else if (g > 255) {
                g = 255;
            } else {
                b = 255;
            }
        } else if (r < 0 || g < 0 || b < 0) {
            if (r < 0) {
                r = 0;
            } else if (g < 0) {
                g = 0;
            } else {
                b = 0;
            }
        }

        var rr1 = Math.floor(r / 16);
        var rr2 = r % 16;
        var res1 = rr1.toString(16) + rr2.toString(16);

        var gg1 = Math.floor(g / 16);
        var gg2 = g % 16;
        var res2 = gg1.toString(16) + gg2.toString(16);

        var bb1 = Math.floor(b / 16);
        var bb2 = b % 16;
        var res3 = bb1.toString(16) + bb2.toString(16);


        return ("#" + res1 + res2 + res3).toUpperCase();

    }

    /* Función que al pasar un valor RGB en representación hexadecimal
       devuelve la representación en formato decimal con el formato RRRGGGBB
    */


    function hex(valor) {
        valor = valor.replace('#', '');
        if (valor.length > 6) valor = valor.substr(2);
        var r = formato(parseInt(valor.substr(0, 2), 16));
        var g = formato(parseInt(valor.substr(2, 2), 16));
        var b = formato(parseInt(valor.substr(4, 2), 16));



        var result = r + '' + g + '' + b;
        return result;
    }

    function formato(r) {
        if (r < 10) {
            r = '00' + r;
        } else if (r < 100) {
            r = '0' + r;
        } else if (r == 0) {
            r = '000';
        }
        return r;
    }
