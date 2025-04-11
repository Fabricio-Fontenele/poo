import { BattleArena } from './BattleArena'
import { Dragon } from './dragon'
import { Elf } from './elf'
import { Troll } from './troll'

const draco = new Dragon('Draco')
const Legolas = new Elf('Legolas')
const grog = new Troll('Grog')

const arena = new BattleArena()
arena.addCreature(draco)
arena.addCreature(Legolas)
arena.addCreature(grog)

const logs = arena.startBattle()

console.log(logs.join('\n'))
