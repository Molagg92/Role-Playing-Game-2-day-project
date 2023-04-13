import Monsters from '../src/monsters.js';
import Character from './../src/character.js';
import lvlup from './../src/lvlup.js';

const character1 = new Character('erik', 80, 12, 0, 1);
const monster1 = new Monsters('giant rat', 20, 5, 20);

describe('Character', () => {
  test('should create a new charcter object with 4 attributes', () => {
    expect(character1.name).toEqual('erik');
    expect(character1.healthPoints).toEqual(80);
    expect(character1.power).toEqual(12);
    expect(character1.currXp).toEqual(0);
    expect(character1.level).toEqual(1);
    console.log(character1);
  });
});

describe('Monsters', () => {
  test('should construct a generic monster for our player to fight, with 4 attributes', () => {
    expect(monster1.name).toEqual('giant rat');
    expect(monster1.healthPoints).toEqual(20);
    expect(monster1.power).toEqual(5);
    expect(monster1.giveXp).toEqual(20);
    console.log(monster1);
  });
});

describe('Attack function', () => {
  test('this should return giant-rat at 8 HP after an atack has happend', () => {
    character1.attack(monster1);
    expect(monster1.healthPoints).toEqual(8);
    console.log(attack);
  });
});


describe('lvlup function', () => {
  test('this should give our character1 to gain levels up', () => {
    character1.attack(monster1);
    character1.attack(monster1);
    character1.currXp > 20;
    this.level ++;
    this.healthPoints += 10;
    this.power += 2;
    console.log('level UP!');
    window.alert('Congratulations!');  
  });
});

