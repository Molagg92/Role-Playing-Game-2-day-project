import Character from './character.js';

export default class Monsters {
  constructor(name, healthPoints, power, giveXp) {
    this.name = name;
    this.healthPoints = healthPoints;
    this.power = power;
    this.giveXp = giveXp;
  }

  attack(target) {
    target.healthPoints -= this.power;
    console.log(`${this.name} attacks ${target.name} for ${this.power} damage`);
  }
}
