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
  }
  ]
}];

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
 
  it('debería retornar huevos', () => {
    expect(huevos('2 km', pokemon)[0].egg).toEqual('2 km');
  });
});