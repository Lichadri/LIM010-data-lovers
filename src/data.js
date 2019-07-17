/* Funcion ordenar */

const ordenar = (condicion, array) => {
  let pokeOrdenados = [];
  if (condicion === 'az') {
    pokeOrdenados = array.sort((primero, segundo) => {
      return (primero.name < segundo.name) * (-1);
    });
  } else if (condicion === 'za') {
    pokeOrdenados = array.sort((primero, segundo) => {
      return (primero.name < segundo.name) * (-1);
    }).reverse();
  } else if (condicion === 'spawnmas') {
    pokeOrdenados = array.sort((primero, segundo) => {
      return segundo.avg_spawns - primero.avg_spawns;
    });
  } else if (condicion === 'spawnmenos') {
    pokeOrdenados = array.sort((primero, segundo) => {
      return primero.avg_spawns - segundo.avg_spawns;
    });
  } else {
    pokeOrdenados = array.sort((primero, segundo) => {
      return primero.num - segundo.num;
    }); 
  }
  return pokeOrdenados;
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