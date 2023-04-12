

export default class Character {
  constructor(name, healthPoints, power) {
    this.name = name;
    this.healthPoints = healthPoints;
    this.power = power;
    
  }
  attack(target) {
    target.healthPoints -= this.power;
  console.log(`${this.name} attacks ${target.name} for ${this.power} damage`);
  }
}

