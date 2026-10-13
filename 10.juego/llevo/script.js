// LISTA DE NOMBRES DE TUS ICONOS
const iconos = [
  "alemania.png",
  "australia.png",
  "austria.png",
  "camboya.png",
  "china.png",
  "dinamarca.png",
  "egipto.png",
  "españa.png",
  "estados_unidos.png",
  "francia.png",
  "grecia.png",
  "guatemala.png",
  "india.png",
  "iran.png",
  "irak.png",
  "islandia.png",
  "italia.png",
  "japon.png",
  "macedonia_del_norte.png",
  "mali.png",
  "mexico.png",
  "mongolia.png",
  "noruega.png",
  "nueva_zelanda.png",
  "peru.png",
  "reino_unido.png",
  "republica_checa.png",
  "rusia.png",
  "siria.png",
  "turquia.png"
];

// SELECCIONAR ELEMENTOS DEL DOM //
const banderas = document.querySelector("#banderas");
const boton = document.querySelector("button");

// VARIABLE PARA GUARDAR LOS QUE SE ESTÁN MOSTRANDO ACTUALMENTE //
let actuales = [];

// FUNCIÓN PARA MOSTRAR 8 BANDERAS ALEATORIAS SIN REPETIR LAS ACTUALES //
function cambiarBanderas() {
    // 1. Filtrar la lista principal excluyendo los que ya están en pantalla
    const disponibles = iconos.filter(icon => !actuales.includes(icon));   // Filtra la lista principal de iconos y quédate únicamente con aquellos que no estén incluidos dentro de los que están mostrándose actualmente

    // 2. Mezclar aleatoriamente los disponibles y tomar 8
    actuales = [...disponibles]                             // Crea una copia en este caso de los iconos que estan disponibles
        .sort(() => Math.random() - 0.5)                    // Sort los ordena pero al tener a math.random entonces aleatoriamente los desordena, el numero 0.5 es para restarselo al numero que de random al azar.
        .slice(0, 8);                                       // Corta el resultado para quedarse con los primero 8 elementos de 0 a 8 sin contar el 8

    // 3. Limpiar el contenedor previo
    banderas.innerHTML = "";

    // 4. Generar las banderas y sus nombres
    actuales.forEach(iconName => {                          // Recorre uno por uno los 8 nombres de archivo que salieron elegidos (
        const nombreFormateado = iconName
            .replace(".png", "")                            //Quita la extensión del archivo
            .replace(/_/g, " ")                             // Busca todos los guiones bajos y los cambia por espacios, la "g" indica que reemplace toddas los _ por espacios, si no solo lo haria una vez 
            .replace(/\b\w/gu, char => char.toUpperCase());  // la primera letra de cada palabra la pone mayuscula
                                                            // la "b" detecta el inicio/limite de una palabra teniendo en cuenta los espacios, la "w" busca el primer carácter que sea una letra justo después de un límite de palabra
                                                            // la "g" indica que busque y aplique las reglas anteriores a todas las palabras y la "u" hace que js reconozca todo el abecedario internacional de forma correcta, evitando romper la regla en palabras con ñ u otros caracteres "especiales como tildes"

        const tarjeta = document.createElement("div");      // crea un div y le asigna el css "trajeta-bandera" para mantener todo ordenado y en columna
        tarjeta.classList.add("tarjeta-bandera");

        const img = document.createElement("img");          // crea una etiqueta img
        img.src = `iconos/${iconName}`;                     // ingresa el link de la imagen --
                                                            // iconos/= Texto fijo Le indica al navegador que busque dentro de una carpeta llamada iconos --
                                                            // ${iconName} = Texto variable trae el nombre exacto del archico en ese momento
        img.alt = nombreFormateado;                         // ingresa el nombre que sacamos anteriormente de la imagen

        const p = document.createElement("p");              // Crea una etiqueta p    
        p.textContent = nombreFormateado;                   // introducir en la eqtiqueta el nombre formateado del icono

        tarjeta.appendChild(img);                           //Mete la bandera dentro de la tarjeta.
        tarjeta.appendChild(p);                             // Mete el texto del país justo debajo de la bandera
        banderas.appendChild(tarjeta);                      // Inserta la tarjeta completa dentro del contenedor principal #banderas
    });
}

// CARGAR BANDERAS AL INICIAR LA PÁGINA //
cambiarBanderas();

// ESCUCHAR EL CLIC EN EL BOTÓN //
boton.addEventListener("click", cambiarBanderas);