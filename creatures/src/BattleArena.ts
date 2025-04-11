import { Dragon } from './dragon'
import { Elf } from './elf'
import { Troll } from './troll'
import { Creature } from './creature'

export class BattleArena {
  private creatures: Creature[] = []

  addCreature(creature: Creature): void {
    this.creatures.push(creature)
  }

  startBattle(): string[] {
    const logs: string[] = []
    while (this.creatures.length > 1) {
      let firstCreature = Math.floor(Math.random() * this.creatures.length)
      let secondCreature: number

      do {
        secondCreature = Math.floor(Math.random() * this.creatures.length)
      } while (firstCreature === secondCreature)
      const attacker = this.creatures[firstCreature]
      const defender = this.creatures[secondCreature]
      attacker.attack(defender)
      defender.defend(attacker.getAttackPower())

      logs.push(
        `${attacker.getName()} attacked ${defender.getName()} for ${attacker.getAttackPower()} damage. ${defender.getName()} health is now ${defender.getHealth()}`
      )

      if (!attacker.isAlive()) {
        logs.push(`${attacker.getName()} has fallen!`)
        this.creatures.splice(firstCreature, 1)
      }
      if (!defender.isAlive()) {
        logs.push(`${defender.getName()} has fallen!`)
        this.creatures.splice(secondCreature, 1)
      }
    }
    if (this.creatures.length === 1) {
      logs.push(`${this.creatures[0].getName()} is the last creature standing!`)
    }
    return logs
  }
}
