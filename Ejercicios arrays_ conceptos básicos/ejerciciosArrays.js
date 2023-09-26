// Ejercicio 1: Crear y Manipular Arrays
// Crea un array llamado listaCompra con los siguientes elementos: 'Peras', 'Manzanas', 'Kiwis', 'Plátanos', y 'Mandarinas'.
let listaCompra=['Peras', 'Manzanas', 'Kiwis', 'Plátanos', 'Mandarinas'];

// Usa el método splice para eliminar las 'Manzanas' de la lista de compra.
listaCompra.splice(1,1);

// Usa el método splice para añadir 'Naranjas' y 'Sandía' después de 'Plátanos' en la lista de compra.
listaCompra.splice(3,0,'Naranjas','Sandía');

// Usa el método splice para reemplazar 'Kiwis' con 'Cerezas' y 'Nísperos' en la lista de compra.
listaCompra.splice(1,1,'Cerezas','Nísperos');

// Imprime la lista de compra final por la consola.
console.log(listaCompra);

// Ejercicio 2: Copiar un Array
// Crea un array llamado original con algunos elementos.
let original=['Manolo', 'Jesús', 'Daria']

// Crea un nuevo array llamado copia que sea una copia de original utilizando el método slice.
let copia = original.slice();

// Modifica un elemento en copia y verifica si también se modifica en original.
copia.splice(1,1,'Chichote');
console.log(original);
console.log(copia);

// Ejercicio 3: Ordenar Notas
// Crea un array llamado notas con las siguientes calificaciones: [4, 8, 3, 10, 5].
let notas = [4, 8, 3, 10, 5];
// Escribe una función que tome el array de notas y lo ordene de menor a mayor. Utiliza el método sort.
notas.sort();
// Imprime el array de notas ordenado por la consola.
console.log(notas);

// Ejercicio 4: Ordenar un Array de Objetos
// Crea un array de objetos llamado alumnos donde cada objeto tiene las propiedades nombre y edad. Agrega al menos 5 objetos a este array.
let alumnos = [
    {
        name: 'Yeray Herrería',
        age: 21
    },
    {
        name: 'Jesusa Martínez',
        age: 23
    },
    {
        name: 'Daria Gómez',
        age: 21
    },
    {
        name: 'Chichote Vazquez',
        age: 18
    },
    {
        name: 'Nukko Nuñez',
        age: 34
    }
  ];
// Escribe una función que tome el array de alumnos y lo ordene por edad de menor a mayor utilizando el método sort.
let alumnosOrd= alumnos.sort(function(alumno1, alumno2) {
    return alumno1.age - alumno2.age;
  })
// Imprime el array de alumnos ordenado por la consola.
console.log(alumnosOrd);

// Ejercicio 5: Otros Métodos de Array
// Crea dos arrays, array1 y array2, con algunos elementos.
let array1=['Peras', 'Manzanas', 'Kiwis', 'Plátanos', 'Mandarinas'];
let array2=['Manolo', 'Jesús', 'Daria'];
// Utiliza el método concat para concatenar los dos arrays en uno nuevo llamado concatenado.
let array3=array1.concat(array2);
console.log(array3);
// Utiliza el método reverse para invertir el orden de los elementos en concatenado.
array3.reverse();
console.log(array3);
// Utiliza el método indexOf para encontrar la posición del elemento 'Plátanos' en concatenado.
console.log(array3.indexOf('Plátanos'));
// Utiliza el método lastIndexOf para encontrar la última posición del elemento 'Plátanos' en concatenado.
console.log(array3.lastIndexOf('Plátanos'));