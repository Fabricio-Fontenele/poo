import { Creature } from './creature'

export class Dragon extends Creature {
  constructor(name: string) {
    let health = 300
    let attackPower = 100
    super(name, health, attackPower)
    this.name = name
    this.health = health
    this.attackPower = attackPower
  }

  move(): string {
    return `${this.name} soars through the skies.`
  }
}
