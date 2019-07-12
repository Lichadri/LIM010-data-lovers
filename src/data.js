/* Funcion ordenar */
const ordenar = (condicion) => {
  if (condicion === 'az') {
    const pokeOrdenados = pokedata.sort((primero, segundo) => {
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
    const pokeOrdenados = pokedata.sort((primero, segundo) => {
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
    const pokeOrdenados = pokedata.sort((primero, segundo) => {
      return segundo.spawn_chance - primero.spawn_chance;
    });
    return pokeOrdenados;
  } else if (condicion === 'spawnmenos') {
    const pokeOrdenados = pokedata.sort((primero, segundo) => {
      return primero.spawn_chance - segundo.spawn_chance;
    });
    return pokeOrdenados;
  } else if (condicion === 'pokedex') {
    const pokeOrdenados = pokedata.sort((primero, segundo) => {
      return primero.num - segundo.num;
    });
    return pokeOrdenados;
  }
};

/* Funcion filtrar tipo */
const filtrar = (filtroSeleccionado, pokedata) => {
  const PokeFiltrados = pokedata.filter((condicion) => {
    return condicion.type.indexOf(filtroSeleccionado) > -1;
  });
  return PokeFiltrados;
};

/* Funcion filtrar debilidad */
const debilidad = (filtroDebilidad, pokedata) => {
  const PokeDebilidad = pokedata.filter((condicion) => {
    return condicion.weaknesses.indexOf(filtroDebilidad) > -1;
  });
  return PokeDebilidad;
};

/* Funcion filtrar huevos */
const huevos = (filtroHuevos, pokedata) => {
  const PokeHuevos = pokedata.filter((condicion) => {
    return condicion.egg.indexOf(filtroHuevos) > -1;
  });
  return PokeHuevos;
};

window.ordenar = ordenar;
window.filtrar = filtrar;
window.debilidad = debilidad;
window.huevos = huevos;

