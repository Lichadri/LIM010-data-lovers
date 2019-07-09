
/* Login*/
const claveIngresada = 'LABORATORIA';
const btnIngresar = document.getElementById('btn-ingresar');
btnIngresar.addEventListener('click', () => {
  const usuario = document.getElementById('usuario').value;
  const contraseña = document.getElementById('password').value;
  if (usuario === claveIngresada && contraseña === claveIngresada) {
    document.getElementById('login').classList.add('hide');
    document.getElementById('vista1').classList.remove('hide');

    /* Mostrar data completa al inicio */
    mostrarPokemones(POKEMON.pokemon);
  } else {
    document.getElementById('resultado').innerHTML = 'Usuario o  contraseña incorrecta';
    /* hacer foco a la contraseña para que se quede el puntero fijo*/
    document.getElementById('usuario').focus();
  }
});

/* Funcion de mostrar pokemones*/
const mostrarPokemones = (arrayPokemones) => {
  contenedor.innerHTML = '';
  for (let i = 0; i < arrayPokemones.length; i++) {
    const num = arrayPokemones[i].num;
    const id = arrayPokemones[i].id;
    const nombre = arrayPokemones[i].name;
    const imagen = arrayPokemones[i].img;
    contenedor.innerHTML += `
    <div class='poke' name='pokemon' id=${id}>
    <p> ${num} </p>
    <p> ${nombre} </p>
    <img src="${imagen}"/>
    </div>`;
  }
};

/* Funcion para ventana emergente */
const contenedor = document.getElementById('contenedor');

/* al contenedor le agrego un evento clik*/
contenedor.addEventListener('click', () => {
  /* Capturo el Id del pokemon que realizo evento en variable numero, se obtine el id del padre
  y le quito 1 para que coincida con el array */
  const poke = event.target.parentElement.id - 1;

  /* Pongo condicional que si el atributo name  del padre de ese elemento es pokemon, 
  muestra modal e inserta datos del pokemon */
  if (event.target.parentElement.getAttribute('name') === 'pokemon') {
    /* Evento mostrar modal*/
    document.getElementById('my-modal').classList.remove('hide');

    /* Insertar informacion de pokemon en Modal */
    document.getElementById('modal-info').innerHTML = `
<img class="imagenModal" src="${POKEMON.pokemon[poke].img}"/>
<p> Nombre:  ${POKEMON.pokemon[poke].name}</p>
 <p>Peso: ${POKEMON.pokemon[poke].weight}   </p> 
<p>Altura: ${POKEMON.pokemon[poke].height}</p>    
<p>Tipo: ${POKEMON.pokemon[poke].type}</p> `;
  }
});
/* Evento cerrar Modal */
document.getElementById('close').addEventListener('click', () => {
  document.getElementById('my-modal').classList.add('hide');
});

/* Agregar evento ordenar*/
const ordernarPor = document.getElementById('ordenar-por');
ordernarPor.addEventListener('change', () => {
  const condicion = document.getElementById('ordenar-por').value;
  ordenar(condicion);
});
