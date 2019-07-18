/* Funcion ordenar */
const ordenar = (condicion, array) => {
  let pokeOrdenados = [];
  if (condicion === 'az') {
    pokeOrdenados = array.sort((primero, segundo) => {
      /* Si la compracion resulta verdadero tomara como  valor "1" 
     y multiplicado por menos 1 se convierte en negativo y ordena de menor a mayo*/
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
const filtrar = (filtroSeleccionado, array) => {
  const PokeFiltrados = array.filter((condicion) => {
    /* Busca el filtro seleccionado dentro del tipo de cada pokemon, si 
    lo encuentra dara un valor de 0 o mayor a 0, en caso no lo encuentre
    devolvera -1. En este caso 0 es mayor que menos 1, por lo tanto es verdadero*/
    return condicion.type.indexOf(filtroSeleccionado) > -1;
  });
  return PokeFiltrados;
};

/* Funcion filtrar debilidad */
const debilidad = (filtroDebilidad, array) => {
  const PokeDebilidad = array.filter((condicion) => {
    return condicion.weaknesses.indexOf(filtroDebilidad) > -1;
  });
  return PokeDebilidad;
};

/* Funcion filtrar huevos */
const huevos = (filtroHuevos, array) => {
  const PokeHuevos = array.filter((condicion) => {
    return condicion.egg.indexOf(filtroHuevos) > -1;
  });
  return PokeHuevos;
};

window.ordenar = ordenar;
window.filtrar = filtrar;
window.debilidad = debilidad;
window.huevos = huevos;