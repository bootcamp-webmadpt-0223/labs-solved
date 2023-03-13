class Soldier {
  constructor(health, strength) {
    this.health = health
    this.strength = strength
  }
  attack() {
    return this.strength
  }
  receiveDamage(damage) {
    this.health -= damage
  }
}

class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength)
    this.name = name
  }

  receiveDamage(damage) {
    this.health -= damage

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`
    }
    else {
      return `${this.name} has died in act of combat`
    }
  }
  battleCry() {
    return 'Odin Owns You All!'
  }
}

class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    }
    else {
      return `A Saxon has died in combat`
    }
  }
}

class War {
  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
  }
  addViking(viking) {
    this.vikingArmy.push(viking)
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon)
  }

  armyAttack(army1, army2) {
    const randArmy1Idx = Math.floor(Math.random() * army1.length)
    const randArmy2Idx = Math.floor(Math.random() * army2.length)

    const randArmySoldier1 = army1[randArmy1Idx]
    const randArmySoldier2 = army2[randArmy2Idx]

    const result = randArmySoldier2.receiveDamage(randArmySoldier1.strength)

    if (randArmySoldier2.health <= 0) {
      army2.splice(randArmy2Idx, 1)
    }

    return result
  }

  vikingAttack() {
    return this.armyAttack(this.vikingArmy, this.saxonArmy)
  }

  saxonAttack() {
    return this.armyAttack(this.saxonArmy, this.vikingArmy)
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day..."
    } else {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}

console.log()
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War }
}
