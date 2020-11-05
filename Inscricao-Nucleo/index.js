// Sorteador
function sorteio() {
    return Math.floor(Math.random()* 10);
}

// Variavél

var numeros = "0123456789";

    var letramini = "abcdefghijklmnopqrstuvwxyz";

    var letramaiusc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var caracteres = "`~!@#$%^&*()-_=+[{]}\\|;:'\",<.>/? ";



function sorteiodeCaracter(number, lower, upper, other, extra) {

    var adicional = extra;


    if (number == true) {

        adicional += numeros;
    }
    if (lower == true) {
        adicional += letramini;
    }

    if (upper == true) {
        adicional += letramaiusc;
    }

    if (other == true) {
        adicional += caracteres;

    }

    return adicional.charAt(sorteio(0, adicional.length));
}


function getSenha(length, extraC, primeiroNumero, mini, maiusc, outros,
    segundoNumero, miniSeg, maiuscSeg, outrosSeg) {

    var senhaTest = "";


    if (length < 3 || length > 30) {

        alert("Esse número é invalido!! Por favor insirar numero entre 3 á 30 !!");

    }

    if (length > 0) {

        senhaTest = senhaTest + sorteiodeCaracter(primeiroNumero, mini, maiusc, outros, extraC);

        for (var i = 1; i < length; ++i) {

            senhaTest = senhaTest + sorteiodeCaracter(segundoNumero, miniSeg, maiuscSeg, outrosSeg, extraC);

        }
    }


    return senhaTest;
}