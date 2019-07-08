/* Asignar contenedor a variable */
const contenedor = document.getElementById('contenedor');

/* Funcion de mostrar pokemones*/
const mostrarPokemones = (data) => {
  for (let i = 0; i < data.length; i++) {
    const num = data[i].num;
    const id = data[i].id;
    const nombre = data[i].name;
    const imagen = data[i].img;

    contenedor.innerHTML += `<div class='poke' name='pokemon' id=${id}>
    <p> ${num} </p>
    <p> ${nombre} </p>
    <img src="${imagen}"/>
    </div>`;
  }
};

const atrapados = document.getElementById('contador');
let contAtrapados = 0;
let contNoAtrapados = 0;
for (let i = 0; i < POKEMON.pokemon.length; i++) {
  if (POKEMON.pokemon[i].multipliers === null) {
    contNoAtrapados++;
  } else {
    contAtrapados = 148 - contNoAtrapados;
  }

  atrapados.innerHTML = `<div>
     ${contAtrapados}    ${contNoAtrapados}
     </div>`;
};

/* cerrar Modal */
 document.getElementById('close').addEventListener('click', () => {
 document.getElementById('my-modal').classList.add('hide');
});

/* Obtengo todo el contenedor donde estan los pokemones y agrego un evento clik*/
document.getElementById('contenedor').addEventListener('click',()=>{
/* Capturo el Id del pokemon que realizo evento en variable numero, se obtine el id del padre
y le quito 1 para que coincida con el array */
const numero = parseInt(event.target.parentElement.id)-1;
/* Pongo condicional que si el atributo name  del padre de ese elemento es pokemon, muestra modal e inserta datos del pokemon*/
if (event.target.parentElement.getAttribute('name') === 'pokemon') {
  /* Muestra modal*/
document.getElementById('my-modal').classList.remove('hide');
/* Insertar info de pokemon en Modal*/
 document.getElementById('modal-info').innerHTML = `
<img class="imagenModal" src="${POKEMON.pokemon[numero].img}"/>
<p> Nombre:  ${POKEMON.pokemon[numero].name}</p>
 <p>Peso: ${POKEMON.pokemon[numero].weight}   </p> 
<p>Altura: ${POKEMON.pokemon[numero].height}</p>    
<p>Tipo: ${POKEMON.pokemon[numero].type}</p> `;
}
});

