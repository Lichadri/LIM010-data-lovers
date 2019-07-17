global.window = global;
// global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

const pokemon = [{
  'id': 10,
  'num': '010',
  'name': 'Caterpie',
  'type': [
    'Bug'
  ],
  'height': '0.30 m',
  'weight': '2.9 kg',
  'candy': 'Caterpie Candy',
  'candy_count': 12,
  'egg': '2 km',
  'spawn_chance': 3.032,
  'avg_spawns': 303.2,
  'spawn_time': '16:35',
  'multipliers': [1.05],
  'weaknesses': [
    'Fire',
    'Flying',
    'Rock'
  ],
  'next_evolution': [{
    'num': '011',
    'name': 'Metapod'
  }, {
    'num': '012',
    'name': 'Butterfree'
  }]
}, {
  'id': 147,
  'num': '147',
  'name': 'Dratini',
  'img': 'http://www.serebii.net/pokemongo/pokemon/147.png',
  'type': [
    'Dragon'
  ],
  'height': '1.80 m',
  'weight': '3.3 kg',
  'candy': 'Dratini Candy',
  'candy_count': 25,
  'egg': '10 km',
  'spawn_chance': 0.30,
  'avg_spawns': 30,
  'spawn_time': '06:41',
  'multipliers': [
    1.83,
    1.84
  ],
  'weaknesses': [
    'Ice',
    'Dragon',
    'Fairy'
  ],
  'next_evolution': [{
    'num': '148',
    'name': 'Dragonair'
  }, {
    'num': '149',
    'name': 'Dragonite'
  }]
}, {
  'id': 23,
  'num': '023',
  'name': 'Ekans',
  'type': [
    'Poison'
  ],
  'height': '2.01 m',
  'weight': '6.9 kg',
  'candy': 'Ekans Candy',
  'candy_count': 50,
  'egg': '5 km',
  'spawn_chance': 2.27,
  'avg_spawns': 227,
  'spawn_time': '12:20',
  'multipliers': [
    2.21,
    2.27
  ],
  'weaknesses': [
    'Ground',
    'Psychic'
  ],
  'next_evolution': [{
    'num': '024',
    'name': 'Arbok'
  }]
}];

describe('ordenar', () => {
  it('debería ser una función', () => {
    expect(typeof ordenar).toBe('function');
  });

  it('debería retornar de az', () => {
    expect(ordenar('az', pokemon)[0].name).toEqual('Caterpie');
  });
  
  it('debería retornar de za', () => {
    expect(ordenar('za', pokemon)[0].name).toEqual('Ekans');
  });
  it('debería retornar de spawnmas', () => {
    expect(ordenar('spawnmas', pokemon)[0].avg_spawns).toEqual(303.2);
  });
  it('debería retornar de spawnmenos', () => {
    expect(ordenar('spawnmenos', pokemon)[0].avg_spawns).toEqual(30);
  });
});

describe('filtrar', () => {
  it('debería ser una función', () => {
    expect(typeof filtrar).toBe('function');
  });

  it('debería retornar tipo', () => {
    expect(filtrar('Bug', pokemon)[0].type).toEqual(['Bug']);
  });
});

describe('debilidad', () => {
  it('debería ser una función', () => {
    expect(typeof debilidad).toBe('function');
  });

  it('debería retornar debilidad', () => {
    expect(debilidad('Rock', pokemon)[0].weaknesses).toEqual(['Fire', 'Flying', 'Rock']);
  });
});

describe('huevos', () => {
  it('debería ser una función', () => {
    expect(typeof huevos).toBe('function');
  });

  it('debería retornar huevos de 2km', () => {
    expect(huevos('2 km', pokemon)[0].egg).toEqual('2 km');
  });
  it('debería retornar huevos de 5km', () => {
    expect(huevos('5 km', pokemon)[0].egg).toEqual('5 km');
  });
  it('debería retornar huevos de 10km', () => {
    expect(huevos('10 km', pokemon)[0].egg).toEqual('10 km');
  });
});