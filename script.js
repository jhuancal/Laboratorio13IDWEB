var ejercicio1 = function() { 
  let numero1 = parseFloat(prompt("Ingrese un número 1:"));
  let numero2 = parseFloat(prompt("Ingrese un número 2:"));
  let numero3 = parseFloat(prompt("Ingrese un número 3:"));
  var numeros = [numero1, numero2, numero3];
  var numerosDoblados = doblarNumeros(numeros);
  alert(numerosDoblados);
}

var doblarNumeros = function(numeros) {
  return numeros.map(x => x * 2);
}

var ejercicio2 = function() {
  let arreglo = [2, -3, 4, -1, 5];
  alert("filtrar y transformar: " + filtrarYTransformar(arreglo));
}

var filtrarYTransformar = function(arreglo) {
  return arreglo.filter(x => x > 0).map(y => y * y).reduce((suma, z) => suma + z);
}

var ejercicio3 = function() {
  const texto = prompt("Ingrese el texto para ordenar: ");
  alert("Texto ordenado: " + reordenarPalabras(texto));
}

var reordenarPalabras = function(texto) {
  return texto.split(" ").sort().map(x => x.toUpperCase());
}

var ejercicio4 = function () {
  const nombre1 = prompt("Ingrese el nombre 1: ");
  const nombre2 = prompt("Ingrese el nombre 2: ");
  const nombre3 = prompt("Ingrese el nombre 3: ");
  const nombre4 = prompt("Ingrese el nombre 4: ");
  const nombre5 = prompt("Ingrese el nombre 5: ");
  const nombre6 = prompt("Ingrese el nombre 6: ");
  let nombres = new Set([nombre1, nombre2, nombre3, nombre4, nombre5, nombre6]);
  var setUnico = eliminarRepetidosSet(nombres);
  console.log(setUnico);
  var mensaje = "Set (" + setUnico.size + ") {"
  setUnico.forEach(x => {
    mensaje += x + ", ";
  })
  alert("Eliminando los repetidos: " + mensaje + "}");
}

var eliminarRepetidosSet = function(nombres) {  
  var setUnico = new Set();
  nombres.forEach(x => {
    if (!setUnico.has(x)){
      setUnico.add(x);
    }
  });
  return setUnico;
}

var ejercicio5 = function () {
  let nota1 = parseFloat(prompt("Ingrese un nota 1:"));
  let nota2 = parseFloat(prompt("Ingrese un nota 2:"));
  let nota3 = parseFloat(prompt("Ingrese un nota 3:"));
  alert("El promedio es: " + promedioDeTresNotas(nota1, nota2, nota3));
}

var promedioDeTresNotas = function (a, b, c) {
  return (a + b + c) / 3;
}

var ejercicio6 = function() {
  var texto = prompt("Ingrese el texto que desea convertir a mayusculas");
  alert("Texto convertido a Mayusculas: " + convertirAMayusculas(texto));
}

var convertirAMayusculas = function (texto) {
  return texto.toUpperCase();
}

var ejercicio7 = function (){
  let precio = parseFloat(prompt("Ingrese el precio:"));
  let porcentaje = parseFloat(prompt("Ingrese el descuento que desea aplicar:"));
  alert("El precio final del producto seria: " + calcularDescuento(precio, porcentaje)); 
}

var calcularDescuento = function(precio, porcentaje) {
  return precio - (precio * porcentaje / 100);
}

var ejercicio8 = function() {
  var nombre = prompt("Ingrese su nombre: ");
  var saludar = nombre => "Hola " + nombre;
  alert(saludar(nombre));
}

var ejercicio9 = function () {
  let numero = parseFloat(prompt("Ingrese un número:"));
  var esPositivo = numero => numero > 0;
  alert(esPositivo(numero) ? "El número es positivo" : "El numero es negativo");
}

var ejercicio10 = function() {
  var texto = prompt("Ingrese el texto que desea transformar");
  var mayusculas = texto => texto.toUpperCase();
  var agregarSigno = texto => texto + "!";
  var componerTransformacion = texto => agregarSigno(mayusculas(texto));
  alert("Texto transformado: " + componerTransformacion(texto));
}

var ejercicio11 = function() {
  var texto = prompt("Ingrese un texto:");
  var procesarTexto = function(texto) {
    var limpiarEspacios = function(str) {
      return str.trim().replace(/\s+/g, " ");
    };
    var contarPalabras = function(str) {
      return str.split(" ").length;
    };
    var limpio = limpiarEspacios(texto);
    var cantidad = contarPalabras(limpio);
    alert("Texto limpio: " + limpio + "\nCantidad de palabras: " + cantidad);
  };
  procesarTexto(texto);
};

var ejercicio12 = function() {
  let numero1 = parseFloat(prompt("Ingrese un número 1:"));
  let numero2 = parseFloat(prompt("Ingrese un número 2:"));
  var operacionesMatematicas = () => {
    const sumar = (a, b) => a + b;
    const restar = (a, b) => a - b;
    const multiplicar = (a, b) => a * b;
    const dividir = (a, b) => b !== 0 ? a / b : "Error";
    return { sumar, restar, multiplicar, dividir };
  };
  const ops = operacionesMatematicas();
  alert("Suma: " + ops.sumar(numero1, numero2));
};

var ejercicio13 = function() {
  let inicial = parseInt(prompt("Ingrese el valor inicial del contador:"));
  var crearContador = function(valorInicial) {
    let contador = valorInicial;
    return {
      incrementar: () => ++contador,
      resetear: () => contador = valorInicial
    };
  };
  const miContador = crearContador(inicial);
  alert("Incremento: " + miContador.incrementar());
  alert("Reset: " + miContador.resetear());
};

var ejercicio14 = function() {
  let inicial = parseFloat(prompt("Ingrese el valor inicial del acumulador:"));
  let nuevo = parseFloat(prompt("Ingrese el valor a acumular:"));
  var acumulador = function(valorInicial) {
    let total = valorInicial;
    return function(nuevoValor) {
      total += nuevoValor;
      return total;
    };
  };
  const acumula = acumulador(inicial);
  alert("Acumulado: " + acumula(nuevo));
};

var ejercicio15 = function() {
  let nombre = prompt("Ingrese su nombre (o deje vacío):");
  var saludo = function(nombre = "Amigo") {
    return "Hola " + nombre;
  };
  alert(saludo(nombre || undefined));
};

var ejercicio16 = function() {
  let cantidad = parseInt(prompt("¿Cuántos números desea ingresar para calcular la media?"));
  let numeros = [];
  for (let i = 0; i < cantidad; i++) {
    let num = parseFloat(prompt("Número " + (i + 1) + ":"));
    numeros.push(num);
  }
  var media = (...numeros) => {
    let suma = numeros.reduce((acc, val) => acc + val, 0);
    return (suma / numeros.length).toFixed(2);
  };
  alert("Media: " + media(...numeros));
};

var ejercicio17 = function() {
  let nombre = prompt("Ingrese su nombre:");
  let edad = parseInt(prompt("Ingrese su edad:"));
  let hobbiesTexto = prompt("Ingrese sus hobbies separados por coma:");
  let hobbies = hobbiesTexto.split(",").map(h => h.trim());
  var mostrarDatos = function(nombre, edad, ...hobbies) {
    alert("Nombre: " + nombre + "\nEdad: " + edad + "\nHobbies: " + hobbies.join(", "));
  };
  mostrarDatos(nombre, edad, ...hobbies);
};

var ejercicio18 = function() {
  let x = parseFloat(prompt("Ingrese el primer número:"));
  let y = parseFloat(prompt("Ingrese el segundo número:"));
  let operador = prompt("Ingrese el operador (+, -, *, /):");
  var ejecutarOperacion = function(fn, x, y) {
    return fn(x, y);
  };
  const operaciones = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => b !== 0 ? a / b : "Error: división por cero"
  };
  const operacion = operaciones[operador];
  if (operacion) {
    alert("Resultado: " + ejecutarOperacion(operacion, x, y));
  } else {
    alert("Operador no válido.");
  }
};
var ejercicio19 = function() {
  let texto = prompt("Ingrese números separados por coma:");
  let arr = texto.split(",").map(n => parseInt(n.trim()));
  var filtrarArreglo = function(arr, callback) {
    return arr.filter(callback);
  };
  const pares = filtrarArreglo(arr, n => n % 2 === 0);
  alert("Pares: " + pares.join(", "));
};
var ejercicio20 = function() {
  let url = prompt("Ingrese la URL del archivo a descargar:");
  var descargarArchivo = function(url, callback) {
    alert("Descargando...");
    callback(url);
  };
  const mostrar = url => alert("Descarga completa de " + url);
  descargarArchivo(url, mostrar);
};
var ejercicio21 = function() {
  let base = parseFloat(prompt("Ingrese la base:"));
  let exponente = parseInt(prompt("Ingrese el exponente:"));
  var potencia = function(base, exponente) {
    if (exponente === 0) return 1;
    return base * potencia(base, exponente - 1);
  };
  alert("Potencia: " + potencia(base, exponente));
};
var ejercicio22 = function() {
  let inicio = parseInt(prompt("Ingrese el valor inicial de la secuencia:"));
  let paso = parseInt(prompt("Ingrese el paso de la secuencia:"));
  var crearSecuencia = function(inicio, paso) {
    let actual = inicio;
    return function() {
      let valor = actual;
      actual += paso;
      return valor;
    };
  };
  const secuencia = crearSecuencia(inicio, paso);
  alert("Siguiente: " + secuencia());
  alert("Siguiente: " + secuencia());
};

