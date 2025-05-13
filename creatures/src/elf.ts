import { Creature } from './creature'

export class elf extends Creature {
  constructor(name: string) {
    super(name, 120, 40)
  }
  move(): string {
    return `${this.name} moves: ${this.name} glides through the forest.`
  }
}
