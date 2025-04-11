import { Creature } from './creature'

export class Elf extends Creature {
  constructor(name: string) {
    let health = 50
    let attackPower = 10
    super(name, health, attackPower)
    this.name = name
    this.health = health
    this.attackPower = attackPower
  }

  move(): string {
    return `${this.name} Legolas glides through the forest.`
  }
}
