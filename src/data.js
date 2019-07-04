const contenedor = document.getElementById('contenedor');
const atrapados = document.getElementById('catch');
const pokeData = () => {
  for (let i = 0; i < POKEMON.pokemon.length; i++) {
    const num = POKEMON.pokemon[i].num;
    const nombre = POKEMON.pokemon[i].name;
    const imagen = POKEMON.pokemon[i].img;
    const estado = POKEMON.pokemon[i].multipliers;

    contenedor.innerHTML += `<div class='poke' id="poker">
    <p> ${num} </p>
    <p> ${nombre} </p>
    <img src=" ${imagen}"/>
    </div>`;
  }
};

