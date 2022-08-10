var valorAnterior = "";
var resulAnterior = "";
var primerNumero;
var segundoNumero;
var operacion;

function init() {
  var resultado = document.getElementById("pantalla");
  var suma = document.getElementById("mas");
  var resta = document.getElementById("menos");
  var multi = document.getElementById("multi");
  var division = document.getElementById("dividir");
  var igual = document.getElementById("igual");
  var AC = document.getElementById("borrar");
  var uno = document.getElementById("uno");
  var dos = document.getElementById("dos");
  var tres = document.getElementById("tres");
  var cuatro = document.getElementById("cuatro");
  var cinco = document.getElementById("cinco");
  var seis = document.getElementById("seis");
  var siete = document.getElementById("siete");
  var ocho = document.getElementById("ocho");
  var nueve = document.getElementById("nueve");
  var cero = document.getElementById("cero");
  var punto = document.getElementById("punto");
  var eliminar = document.getElementById("delete");

  //eventos
  uno.onclick = function (e) {
    resultado.value = resultado.value + "1";
    valorAnterior = resultado.value - 1;
  };
  dos.onclick = function (e) {
    resultado.value = resultado.value + "2";
  };
  tres.onclick = function (e) {
    resultado.value = resultado.value + "3";
  };
  cuatro.onclick = function (e) {
    resultado.value = resultado.value + "4";
  };
  cinco.onclick = function (e) {
    resultado.value = resultado.value + "5";
  };
  seis.onclick = function (e) {
    resultado.value = resultado.value + "6";
  };
  siete.onclick = function (e) {
    resultado.value = resultado.value + "7";
  };
  ocho.onclick = function (e) {
    resultado.value = resultado.value + "8";
  };
  nueve.onclick = function (e) {
    resultado.value = resultado.value + "9";
  };
  cero.onclick = function (e) {
    resultado.value = resultado.value + "0";
  };
  punto.onclick = function (e) {
    resultado.value = resultado.value + ".";
  };

  eliminar.onclick = function (e) {
    resultado.value = resultado.value.slice(0, -1);
  };

  AC.onclick = function (e) {
    limpiar();
  };

  suma.onclick = function (e) {
    primerNumero = resultado.value;
    operacion = "+";
    limpiar();
  };

  resta.onclick = function (e) {
    primerNumero = resultado.value;
    operacion = "-";
    limpiar();
  };

  multi.onclick = function (e) {
    primerNumero = resultado.value;
    operacion = "*";
    limpiar();
  };

  division.onclick = function (e) {
    primerNumero = resultado.value;
    operacion = "/";
    limpiar();
  };

  igual.onclick = function (e) {
    segundoNumero = resultado.value;
    if (resulAnterior != 0) {
      resultado.value = resulAnterior;
    } else {
      solucion();
    }
  };

  function solucion() {
    let solu = 0;
    switch (operacion) {
      case "+":
        solu = parseFloat(primerNumero) + parseFloat(segundoNumero);
        break;
      case "-":
        solu = parseFloat(primerNumero) - parseFloat(segundoNumero);
        break;
      case "*":
        solu = parseFloat(primerNumero) * parseFloat(segundoNumero);
        break;
      case "/":
        solu = parseFloat(primerNumero) / parseFloat(segundoNumero);
        break;
    }
    reiniciarValues();
    resultado.value = solu;
    resulAnterior = solu;
  }

  function limpiar() {
    resultado.value = "";
    valorAnterior = "";
    resulAnterior = "";
  }

  function reiniciarValues() {
    primerNumero = 0;
    segundoNumero = 0;
    operacion = "";
  }
}
