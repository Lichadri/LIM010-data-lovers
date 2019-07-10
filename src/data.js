
/* Funcion ordenar */
const ordenar = (condicion) => {
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
    return pokeOrdenados;
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
    return pokeOrdenados;
  } else if (condicion === 'spawnmas') {
    const pokeOrdenados = POKEMON.pokemon.sort((primero, segundo) => {
      return segundo.spawn_chance - primero.spawn_chance;
    });
    return pokeOrdenados;
  } else if (condicion === 'spawnmenos') {
    const pokeOrdenados = POKEMON.pokemon.sort((primero, segundo) => {
      return primero.spawn_chance - segundo.spawn_chance;
    });
    return pokeOrdenados;
  }
};

/* Funcion filtrar tipo */
const filtrar = (filtroSeleccionado) => {
  const PokeFiltrados = POKEMON.pokemon.filter((condicion) => {
    return condicion.type.indexOf(filtroSeleccionado) > -1;
  });
  return PokeFiltrados;
};

/* Funcion filtrar debilidad */
const debilidad = (filtroDebilidad) => {
  const PokeDebilidad = POKEMON.pokemon.filter((condicion) => {
    return condicion.weaknesses.indexOf(filtroDebilidad) > -1;
  });
  return PokeDebilidad;
};