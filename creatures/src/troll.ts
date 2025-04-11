import { Creature } from './creature'

export class Troll extends Creature {
  constructor(name: string) {
    let health = 75
    let attackPower = 30
    super(name, health, attackPower)
    this.name = name
    this.health = health
    this.attackPower = attackPower
  }

  move(): string {
    return `${this.name} charges with heavy steps.`
  }
}
