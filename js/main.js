//alert("Bienvenido a la calculadora de David")

function Calcular(params) {
    var valor1 = document.getElementById('valor1').value
    var valor2 = document.getElementById('valor2').value
    var Operacion = document.getElementById('Operacion').value

    //alert('Voy a ' + Operacion + ' los valores ' + valor1 + ' y ' + valor2);

    if (Operacion == "sumar") {
        var resultado = (Number(valor1) + Number(valor2))
    } else if (Operacion == "restar") {
        var resultado = (Number(valor1) - Number(valor2))
    } else if (Operacion == "dividir") {
        var resultado = (Number(valor1) / Number(valor2))
    } else {
        var resultado = (Number(valor1) * Number(valor2))
    }
    var parrafo = document.getElementById('resultado')
    parrafo.innerHTML = ' El resultado es ' + resultado
}