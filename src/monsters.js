import Character from "./character";

export default class Monsters {
  constructor(name, healthPoints, power, giveXp) {
    this.name = name;
    this.healthPoints = healthPoints;
    this.power = power;
    this.giveXp = giveXp;
  }

attack(target) {
  target.healthPoints -= this.power;
console.log(`${Character.name} attacks ${Monsters.name} for ${this.power} damage`);
  }
}
