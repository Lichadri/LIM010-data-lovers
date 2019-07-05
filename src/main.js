const claveIngresada = 'LABORATORIA';
const btnIngresar = document.getElementById('btn-ingresar');
btnIngresar.addEventListener('click', () => {
  const usuario = document.getElementById('usuario').value;
  const contraseña = document.getElementById('password').value;
  if (usuario === claveIngresada && contraseña === claveIngresada) {
    document.getElementById('login').classList.add('hide');
    document.getElementById('vista1').classList.remove('hide');
    mostrarPokemones(POKEMON.pokemon);
  } else {
    document.getElementById('resultado').innerHTML = 'Usuario o  contraseña incorrecta';
    /* hacer foco a la contraseña para que se quede el puntero fijo*/
    document.getElementById('usuario').focus();
  }
});

