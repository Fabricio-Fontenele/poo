export abstract class Creature {
  protected name: string
  protected health: number
  protected attackPower: number
  constructor(name: string, health: number, attackPower: number) {
    this.name = name
    this.health = health
    this.attackPower = attackPower
  }
  abstract move(): string

  getName(): string {
    return this.name
  }

  getHealth(): number {
    return this.health
  }

  getAttackPower(): number {
    return this.attackPower
  }

  attack(target: Creature): string {
    return `${this.name} attacked ${target.name}. ${target.name} health is now ${target.health}.`
  }

  defend(amount: number): void {
    this.health -= amount
  }
  isAlive(): boolean {
    return this.health > 0
  }
}
