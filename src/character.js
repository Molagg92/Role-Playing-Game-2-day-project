
export default class Character {
  constructor(name, healthPoints, power, currXp) {
    this.name = name;
    this.healthPoints = healthPoints;
    this.power = power;
    this.currXp = currXp;

    
  }
  attack(target) {
    target.healthPoints -= this.power;
  console.log(`${this.name} attacks ${target.name} for ${this.power} damage`);
  }
  kill (target) {
    if (target.healthPoints <= 0){
      return character1.currXp += target.giveXp;
    }
  }
}


