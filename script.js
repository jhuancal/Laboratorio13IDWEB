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
  let arregloNombres = [nombre1, nombre2, nombre3, nombre4, nombre5, nombre6];
  var setNombres = eliminarRepetidosAutomaticamente(arregloNombres);
  let mensaje = "Set (" + setNombres.size + ") { ";
  let contador = 0;
  setNombres.forEach(x => {
    contador++;
    mensaje += x;
    if (contador < setNombres.size) {
      mensaje += ", ";
    }
  });
  mensaje += " }";
  alert("Arreglo de nombres: " + arregloNombres + "\nEliminando los repetidos: " + mensaje);
} 

var eliminarRepetidosAutomaticamente = function(arregloNombres) {  
  var setNombres = new Set(arregloNombres);
  return setNombres;
}

var ejercicio5 = function() {
  let texto = prompt("Ingrese elementos separados por coma:");
  let arr = texto.split(",").map(x => x.trim());
  alert("¿Tiene duplicados?: " + tieneDuplicados(arr));
}

var tieneDuplicados = function(arr) {
  return new Set(arr).size !== arr.length;
}

var ejercicio6 = function() {
  const productos = new Map([
    ["laptop", 3500.5],
    ["mouse", 100.35],
    ["teclado", 250.9],
    ["monitor", 720.457]
  ]);

  let texto = prompt("Ingrese productos separados por coma:");
  let lista = texto.split(",").map(x => x.trim());

  let total = 0;
  lista.forEach(p => {
    if (productos.has(p)) {
      total += productos.get(p);
    }
  });

  alert("Total de la compra: " + total.toFixed(2));
}

var ejercicio7 = function() {
  let texto = prompt("Ingrese el texto:");
  var resultado = contarPalabras(texto);
  let mensaje = "Conteo de palabras:\n";
  resultado.forEach((valor, clave) => {
    mensaje += clave + ": " + valor + "\n";
  });
  alert(mensaje);
}

var contarPalabras = function(texto) {
  let palabras = texto.toLowerCase().split(" ");
  let mapa = new Map();
  palabras.forEach(p => {
    mapa.set(p, (mapa.get(p) || 0) + 1);
  });
  return mapa;
}


var ejercicio8 = function() {
  const capitales = new Map([
    ["Perú", "Lima"],
    ["Chile", "Santiago"]
  ]);
  const invertido = invertirMap(capitales);
  let mensaje = "Map invertido:\n";
  invertido.forEach((valor, clave) => {
    mensaje += clave + " => " + valor + "\n";
  });
  alert(mensaje);
}

var invertirMap = function(map) {
  let nuevo = new Map();
  map.forEach((valor, clave) => {
    nuevo.set(valor, clave);
  });
  return nuevo;
}

var ejercicio9 = function() {
  var auto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022,
    detalles: function() {
      return "Marca: " + this.marca + ", Modelo: " + this.modelo + ", Año: " + this.año;
    }
  };
  alert(auto.detalles());
}
var ejercicio10 = function() {
  let texto = prompt("Ingrese el texto:");
  var resultado = contarLetras(texto);
  let mensaje = "Conteo de letras:\n";
  for (let letra in resultado) {
    mensaje += letra + ": " + resultado[letra] + "\n";
  }
  alert(mensaje);
}

var contarLetras = function(texto) {
  let obj = {};
  texto.toLowerCase().split("").forEach(letra => {
    if (letra !== " ") {
      obj[letra] = (obj[letra] || 0) + 1;
    }
  });
  return obj;
}
var ejercicio11 = function() {
  const tiendaA = {
    laptop: 3500.5,
    mouse: 100.35,
    teclado: 250.9
  };

  const tiendaB = {
    mouse: 95.2,
    monitor: 720.457,
    teclado: 260.1
  };

  const combinado = combinarCatalogos(tiendaA, tiendaB);
  let mensaje = "Catálogo combinado:\n";
  for (let producto in combinado) {
    mensaje += producto + ": " + combinado[producto] + "\n";
  }
  alert(mensaje);
}

var combinarCatalogos = function(tiendaA, tiendaB) {
  let resultado = {};

  for (let producto in tiendaA) {
    resultado[producto] = tiendaA[producto];
  }

  for (let producto in tiendaB) {
    if (resultado[producto]) {
      resultado[producto] = Math.min(resultado[producto], tiendaB[producto]);
    } else {
      resultado[producto] = tiendaB[producto];
    }
  }

  for (let producto in resultado) {
    resultado[producto] = resultado[producto].toFixed(2);
  }

  return resultado;
}

var ejercicio12 = function() {
  const listaEmpleados = [
    { id: 1, nombre: "Juan", area: "Ventas", salario: 2400 },
    { id: 2, nombre: "Marta", area: "Ventas", salario: 2600 },
    { id: 3, nombre: "Luis", area: "TI", salario: 4000 },
    { id: 4, nombre: "Ana", area: "Recursos Humanos", salario: 3000 }
  ];

  const resultado = gestionarEmpleados(listaEmpleados);
  let mensaje = "Resumen por área:\n";
  for (let [area, datos] of resultado.entries()) {
    mensaje += area + ": Empleados: [" + datos.empleados.join(", ") + "], Promedio: " + datos.promedio + "\n";
  }
  alert(mensaje);
}

var gestionarEmpleados = function(empleados) {
  let mapa = new Map();

  empleados.forEach(e => {
    if (!mapa.has(e.area)) {
      mapa.set(e.area, { empleados: [], salarios: [] });
    }
    mapa.get(e.area).empleados.push(e.nombre);
    mapa.get(e.area).salarios.push(e.salario);
  });

  mapa.forEach((datos, area) => {
    let suma = datos.salarios.reduce((acc, val) => acc + val, 0);
    let promedio = (suma / datos.salarios.length).toFixed(0);
    datos.promedio = parseInt(promedio);
    delete datos.salarios;
  });

  return mapa;
}

