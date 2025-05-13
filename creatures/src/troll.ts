import { Creature } from './creature'

export class Troll extends Creature {
  constructor(name: string) {
    super(name, 200, 30)
  }
  move(): string {
    return `${this.name} moves: ${this.name} charges with heavy steps.`
  }
}
