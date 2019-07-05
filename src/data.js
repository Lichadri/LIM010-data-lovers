const filterOrder = document.getElementById('filtro-orden');
const filterType = document.getElementById('filtro-tipo');
// funcion que espera que se seleccione algun filtro
filterOrder.addEventListener('change', () => {
  ordenar();
});
filterType.addEventListener('change', () => {
  ordenar();
});

// funcion ordenar
const ordenar = () => {
  const pokemonesFiltrados = POKEMON.pokemon;
  mostrarPokemones(pokemonesFiltrados);
};
const contenedor = document.getElementById('contenedor');
const mostrarPokemones = (data) => {
  for (let i = 0; i < data.length; i++) {
    const num = data[i].num;
    const nombre = data[i].name;
    const imagen = data[i].img;

    contenedor.innerHTML += `<div class='poke' id="poker">
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