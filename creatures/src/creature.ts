export abstract class Creature {
  protected name: string
  protected health: number
  protected attackPower: number

  constructor(name: string, health: number, attackPower: number) {
    this.name = name
    this.health = health
    this.attackPower = attackPower
  }
  getName(): string {
    return this.name
  }

  getHealth(): number {
    return this.health
  }

  getAttackPower(): number {
    return this.attackPower
  }

  abstract move(): string

  attack(target: Creature): string {
    return `${this.name} atacou o outro com ${target} de dano`
  }

  defend(amount: number): void {
    this.health -= amount
  }

  isAlive(): boolean {
    return this.health > 0
  }
}
