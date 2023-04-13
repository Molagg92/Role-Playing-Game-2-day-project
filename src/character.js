
export default class Character {
  constructor(name, healthPoints, power, currXp, level) {
    this.name = name;
    this.healthPoints = healthPoints;
    this.power = power;
    this.currXp = currXp;
    this.level = level;

  }
  attack(target) {
    target.healthPoints -= this.power;
    console.log(`${this.name} attacks ${target.name} for ${this.power} damage`);
    if (target.healthPoints <= 0) {
      // return character1.currXp + target.giveXp;
    }
  }
}


