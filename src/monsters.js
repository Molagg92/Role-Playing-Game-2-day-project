import Character from "./character";

export default class Monsters {
  constructor(name, healthPoints, power) {
    this.name = name;
    this.healthPoints = healthPoints;
    this.power = power;
    
  }

attack(target) {
  target.healthPoints -= this.power;
console.log(`${Character.name} attacks ${Monsters.name} for ${this.power} damage`);
  }
}
