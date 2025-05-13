import { Creature } from './creature'

export class Dragon extends Creature {
  constructor(name: string) {
    super(name, 300, 50)
  }
  move(): string {
    return `draco moves: ${this.name} soars through the skies`
  }
}
