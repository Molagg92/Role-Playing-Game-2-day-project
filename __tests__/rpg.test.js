import Character from './../src/character.js';

describe('Character', () =>{

  test('should create a new charcter object with 4 attributes', () => {
    const character1 = new Character ('erik' , 80, 12, 'fun');
    expect(character1.name).toEqual('erik');
    expect(character1.iq).toEqual(80);
    expect(character1.power).toEqual(12);
    expect(character1.personality).toEqual('fun');
    console.log(character1);
  });
});



// const character1 = new Character ('erik' , 80, 12, 'fun');

// console.log(character1);