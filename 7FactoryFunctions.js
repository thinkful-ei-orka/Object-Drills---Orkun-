// Write a factory function called createCharacter (review in this assignment) that could appropriately build characters from LOTR that have the following attributes:
// ===============================================================================================
// | Name                      | Nickname    | Race       | Origin         | Attack   | Defense  |
// -----------------------------------------------------------------------------------------------
// | Gandalf the White         | gandalf     | Wizard     | Middle Earth   | 10       | 6        |
// -----------------------------------------------------------------------------------------------
// | Bilbo Baggins             | bilbo       | Hobbit     | The Shire      | 2        | 1        |
// -----------------------------------------------------------------------------------------------
// | Frodo Baggins             | frodo       | Hobbit     | The Shire      | 3        | 2        |
// -----------------------------------------------------------------------------------------------
// | Aragorn son of Arathorn   | aragorn     | Man        | Dunnedain      | 6        | 8        |
// -----------------------------------------------------------------------------------------------
// | Legolas                   | legolas     | Elf        | Woodland Realm | 8        | 5        |
// -----------------------------------------------------------------------------------------------
// Each character should have the method describe which takes no parameters and prints out the string: "{name} is a {race} from {origin}."

// Each character should also have a method called evaluateFight that takes in a character object and returns the following string: "Your opponent takes {x} damage and you receive {y} damage" where x and y are the differences between each characters attack and defense values. If defense exceeds attack, then take zero damage.

// Using array literal syntax, create an array characters that calls your factory function for each character in the table above with the relevant parameters. Your characters array should now have 5 objects in it.

// Add a new character to characters (make up any attributes not provided):

// Arwen Undomiel is a Half-Elf of Rivendell
// Using the .find() function, retrieve your character nicknamed aragorn from characters and then call his describe method.

// Using the .filter() function, create a new array from characters that ONLY contains characters of the race Hobbit.

// Using the .filter() function, create a new array from characters that ONLY contains characters with attack value above 5.

// What if you wanted to equip a weapon for each character and change how they are described? For example:

// Gandolf the White is a Wizard of the Middle Earth who uses a wizard staff
// Bilbo Baggings is a Hobbit of the Shire who uses the Ring
// Frodo ... String and Barrow Blade
// Aragon .... Anduril
// Legolas ... Bow and Arrow
// Arwen .... Hadhafang
// How would you change the factory function and other methods?

function createCharacter(nameOfChar, nicknameOfChar, raceOfChar, originOfChar, attackOfChar, defenseOfChar, weaponOfChar) {
  return {
      Name : nameOfChar,
      Nickname : nicknameOfChar,
      Race : raceOfChar,
      Origin : originOfChar,
      Attack : attackOfChar,
      Defense : defenseOfChar,
      Weapon : weaponOfChar,
      describe() {
          console.log(`${this.Name} is a ${this.Race} from ${this.Origin} who uses a ${this.Weapon}`);
      },
      evaluateFight(character) {
          let x = 0;
          let y = 0;
          if(character.Defense <= this.Attack) {
              x = this.Attack - character.Defense
          }
          if(this.Defense <= character.Attack) {
              y = character.Attack - this.defense
          }
          return `Your opponent takes ${x} damage and you receive ${y} damage`
      }
      
  }
}

  const characters = [
      createCharacter('Gandalf the White', 'Gandalf', 'Wizard', 'Middle Earth', '10', '6','wizard staff'),
      createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'the Shire', '2', '1', 'blade'),
      createCharacter('frodo baggins', 'frodo', 'Hobbit', 'the Shire', '3', '2', 'stone'),
      createCharacter('Aragorn son of Arathorn', 'aragorn', 'man', 'Dunnedain', '6', '8', 'sword'),
      createCharacter('legolas', 'elf', 'woodland realm', '8', '5', 'arrow bow'),
      createCharacter('Orkun', 'human', 'Turkey', '8', '6', 'mind power')
  ]

const nickAragorn=  characters.find(element => {
    if(element.Nickname === 'aragorn' ) {
        return true
    }
    else {
        return false
    }
})

const raceHobbit = characters.filter(element => {
    if(element.Race === 'Hobbit') {
        return true
    }
    else {
        return false
    }
})

const attValue = characters.filter(element => {
    if(element.Attack > 5) {
        return true
    }
    else {
        return false
    }
})

  characters[0].describe()



console.log(createCharacter('Gandalf the White', 'Gandalf', 'Wizard', 'Middle Earth', '10', '6', 'wizard staff'))