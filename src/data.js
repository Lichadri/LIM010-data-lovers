
/* Funcion ordenar */
const ordenar = (condicion) => {
  /* Ordenar A-Z */
  if (condicion === 'az') {
    const pokeOrdenados = POKEMON.pokemon.sort((primero, segundo) => {
      if (primero.name > segundo.name) {
        return 1;
      }
      if (primero.name < segundo.name) {
        return -1;
      }
      return 0;
    });
    mostrarPokemones(pokeOrdenados);
  } else if (condicion === 'za') {
    const pokeOrdenados = POKEMON.pokemon.sort((primero, segundo) => {
      if (primero.name < segundo.name) {
        return 1;
      }
      if (primero.name > segundo.name) {
        return -1;
      }
      return 0;
    });
    mostrarPokemones(pokeOrdenados);
  } else if (condicion === 'spawnmas') {
    const pokeOrdenados = POKEMON.pokemon.sort((primero, segundo) => {
      return segundo.spawn_chance - primero.spawn_chance;
    });
    mostrarPokemones(pokeOrdenados);
  } else if (condicion === 'spawnmenos') {
    const pokeOrdenados = POKEMON.pokemon.sort((primero, segundo) => {
      return primero.spawn_chance - segundo.spawn_chance;
    });
    mostrarPokemones(pokeOrdenados);
  }
};

