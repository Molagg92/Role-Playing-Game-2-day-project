function lvlup(){
if (character1.currXp > 20){
  this.level ++;
  this.healthPoints += 10;
  this.power += 2;
  console.log('level UP!');
  window.alert('Congratulations!');
}

}