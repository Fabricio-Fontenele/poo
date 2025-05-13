import { BattleArena } from './battleArena'
import { Dragon } from './dragon'
import { elf } from './elf'
import { Troll } from './troll'

const draco = new Dragon('Draco')
const legolas = new elf('legolas')
const grog = new Troll('grog')

const arena = new BattleArena()
arena.addCreature(draco)
arena.addCreature(legolas)
arena.addCreature(grog)

const logs = arena.startBattle()

console.log(logs.join('\n'))
