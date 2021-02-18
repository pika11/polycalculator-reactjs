/* eslint-disable no-throw-literal */
/* eslint-disable no-empty-function */
module.exports = {
  wa: {
    name: 'Warrior',
    plural: 'Warriors',
    group: 'Normal',
    groupPriority: 0, description: '',
    currenthp: 10,
    maxhp: 10,
    vet: true,
    vetNow: false,
    att: 2,
    def: 2,
    bonus: 1,
    fort: true,
    range: false,
    retaliation: true,
    forceRetaliation: undefined,
    setHP: setHP,
    addBonus: addBonus,
    onTheWater: onTheWater,
    getOverride: getOverride
  },
  ri: {
    name: 'Rider',
    plural: 'Riders',
    group: 'Normal',
    groupPriority: 0, description: '',
    currenthp: 10,
    maxhp: 10,
    vet: true,
    vetNow: false,
    att: 2,
    def: 1,
    bonus: 1,
    fort: true,
    range: false,
    retaliation: true,
    forceRetaliation: undefined,
    setHP: setHP,
    addBonus: addBonus,
    onTheWater: onTheWater,
    getOverride: getOverride
  },
  ar: {
    name: 'Archer',
    plural: 'Archers',
    group: 'Normal',
    groupPriority: 0, description: '',
    currenthp: 10,
    maxhp: 10,
    vet: true,
    vetNow: false,
    att: 2,
    def: 1,
    bonus: 1,
    fort: true,
    range: true,
    retaliation: true,
    forceRetaliation: undefined,
    setHP: setHP,
    addBonus: addBonus,
    onTheWater: onTheWater,
    getOverride: getOverride
  },
  de: {
    name: 'Defender',
    plural: 'Defenders',
    group: 'Normal',
    groupPriority: 0, description: '',
    currenthp: 15,
    maxhp: 15,
    vet: true,
    vetNow: false,
    att: 1,
    def: 3,
    bonus: 1,
    fort: true,
    range: false,
    retaliation: true,
    forceRetaliation: undefined,
    setHP: setHP,
    addBonus: addBonus,
    onTheWater: onTheWater,
    getOverride: getOverride
  },
  kn: {
    name: 'Knight',
    plural: 'Knights',
    group: 'Normal',
    groupPriority: 0, description: '',
    currenthp: 15,
    maxhp: 15,
    vet: true,
    vetNow: false,
    att: 3.5,
    def: 1,
    bonus: 1,
    fort: true,
    range: false,
    retaliation: true,
    forceRetaliation: undefined,
    setHP: setHP,
    addBonus: addBonus,
    onTheWater: onTheWater,
    getOverride: getOverride
  },
  sw: {
    name: 'Swordsman',
    plural: 'Swordsmen',
    group: 'Normal',
    groupPriority: 0, description: '',
    currenthp: 15,
    maxhp: 15,
    vet: true,
    vetNow: false,
    att: 3,
    def: 3,
    bonus: 1,
    fort: true,
    range: false,
    retaliation: true,
    forceRetaliation: undefined,
    setHP: setHP,
    addBonus: addBonus,
    onTheWater: onTheWater,
    getOverride: getOverride
  },
  ca: {
    name: 'Catapult',
    plural: 'Catapults',
    group: 'Normal',
    groupPriority: 0, description: '',
    currenthp: 10,
    maxhp: 10,
    vet: true,
    vetNow: false,
    att: 4,
    def: 0,
    bonus: 1,
    fort: false,
    range: true,
    retaliation: true,
    forceRetaliation: undefined,
    setHP: setHP,
    addBonus: addBonus,
    onTheWater: onTheWater,
    getOverride: getOverride
  },
  gi: {
    name: 'Giant',
    plural: 'Giants',
    group: 'Normal',
    groupPriority: 0, description: '',
    currenthp: 40,
    maxhp: 40,
    vet: false,
    vetNow: false,
    att: 5,
    def: 4,
    bonus: 1,
    fort: false,
    range: false,
    retaliation: true,
    forceRetaliation: undefined,
    setHP: setHP,
    addBonus: addBonus,
    onTheWater: onTheWater,
    getOverride: getOverride
  },
  cr: {
    name: 'Crab',
    plural: 'Crabs',
    group: 'Aquarion',
    groupPriority: 1, description: '',
    currenthp: 40,
    maxhp: 40,
    vet: false,
    vetNow: false,
    att: 4,
    def: 4,
    bonus: 1,
    fort: false,
    range: false,
    retaliation: true,
    forceRetaliation: undefined,
    setHP: setHP,
    addBonus: addBonus,
    getOverride: getOverride
  },
  tr: {
    name: 'Tridention',
    plural: 'Tridentions',
    group: 'Aquarion',
    groupPriority: 1, description: '',
    currenthp: 15,
    maxhp: 15,
    vet: true,
    vetNow: false,
    att: 3,
    def: 1,
    bonus: 1,
    fort: true,
    range: true,
    retaliation: true,
    forceRetaliation: undefined,
    setHP: setHP,
    addBonus: addBonus,
    getOverride: getOverride
  },
  po: {
    name: 'Polytaur',
    plural: 'Polytaurs',
    group: 'Elyrion',
    groupPriority: 2, description: '',
    currenthp: 15,
    maxhp: 15,
    vet: true,
    vetNow: false,
    att: 3,
    def: 1,
    bonus: 1,
    fort: true,
    range: false,
    retaliation: true,
    forceRetaliation: undefined,
    setHP: setHP,
    addBonus: addBonus,
    onTheWater: onTheWater,
    getOverride: getOverride
  },
  na: {
    name: 'Navalon',
    plural: 'Navalons',
    group: 'Elyrion',
    groupPriority: 2, description: '',
    currenthp: 30,
    maxhp: 30,
    vet: false,
    vetNow: false,
    att: 4,
    def: 4,
    bonus: 1,
    fort: false,
    range: false,
    retaliation: true,
    forceRetaliation: undefined,
    setHP: setHP,
    addBonus: addBonus,
    getOverride: getOverride
  },
  ga: {
    name: 'Gaami',
    plural: 'Gaamis',
    group: 'Polaris',
    groupPriority: 3, description: '',
    currenthp: 30,
    maxhp: 30,
    vet: false,
    vetNow: false,
    att: 4,
    def: 4,
    bonus: 1,
    fort: false,
    range: false,
    retaliation: true,
    forceRetaliation: undefined,
    setHP: setHP,
    addBonus: addBonus,
    getOverride: getOverride
  },
  mb: {
    name: 'Mind Bender',
    plural: 'Mind Benders',
    group: 'Normal',
    groupPriority: 0, description: '',
    currenthp: 10,
    maxhp: 10,
    vet: false,
    vetNow: false,
    att: 0,
    def: 1,
    bonus: 1,
    fort: false,
    range: false,
    retaliation: false,
    forceRetaliation: undefined,
    setHP: setHP,
    addBonus: addBonus,
    onTheWater: onTheWater,
    getOverride: getOverride
  },
  eg: {
    name: 'Dragon Egg',
    plural: 'Dragon Eggs',
    group: 'Elyrion',
    groupPriority: 2, description: '',
    currenthp: 10,
    maxhp: 10,
    vet: false,
    vetNow: false,
    att: 0,
    def: 2,
    bonus: 1,
    fort: false,
    range: false,
    retaliation: false,
    forceRetaliation: undefined,
    setHP: setHP,
    addBonus: addBonus,
    onTheWater: onTheWater,
    getOverride: getOverride
  },
  bd: {
    name: 'Baby Dragon',
    plural: 'Baby Dragons',
    group: 'Elyrion',
    groupPriority: 2, description: '',
    currenthp: 15,
    maxhp: 15,
    vet: true,
    vetNow: false,
    att: 3,
    def: 3,
    bonus: 1,
    fort: false,
    range: false,
    retaliation: true,
    forceRetaliation: undefined,
    setHP: setHP,
    addBonus: addBonus,
    getOverride: getOverride
  },
  dr: {
    name: 'Fire Dragon',
    plural: 'Fire Dragons',
    group: 'Elyrion',
    groupPriority: 2, description: '',
    currenthp: 20,
    maxhp: 20,
    vet: false,
    vetNow: false,
    att: 4,
    def: 3,
    bonus: 1,
    fort: false,
    range: true,
    retaliation: true,
    forceRetaliation: undefined,
    setHP: setHP,
    addBonus: addBonus,
    getOverride: getOverride
  },
  mo: {
    name: 'Mooni',
    plural: 'Moonies',
    group: 'Polaris',
    groupPriority: 3, description: '',
    currenthp: 10,
    maxhp: 10,
    vet: true,
    vetNow: false,
    att: 0,
    def: 2,
    bonus: 1,
    fort: false,
    range: false,
    retaliation: false,
    forceRetaliation: undefined,
    setHP: setHP,
    addBonus: addBonus,
    getOverride: getOverride
  },
  sl: {
    name: 'Battle Sled',
    plural: 'Battle Sleds',
    group: 'Polaris',
    groupPriority: 3, description: '',
    currenthp: 15,
    maxhp: 15,
    vet: true,
    vetNow: false,
    att: 3,
    def: 2,
    bonus: 1,
    fort: false,
    range: false,
    retaliation: true,
    forceRetaliation: undefined,
    setHP: setHP,
    addBonus: addBonus,
    getOverride: getOverride
  },
  if: {
    name: 'Ice Fortress',
    plural: 'Ice Fortresses',
    group: 'Polaris',
    groupPriority: 3, description: '',
    currenthp: 20,
    maxhp: 20,
    vet: true,
    vetNow: false,
    att: 4,
    def: 3,
    bonus: 1,
    fort: false,
    range: true,
    retaliation: true,
    forceRetaliation: undefined,
    setHP: setHP,
    addBonus: addBonus,
    getOverride: getOverride
  },
  nb: {
    name: 'Nature Bunny',
    plural: 'Nature Bunnies',
    group: 'Normal',
    groupPriority: 0, description: '',
    currenthp: 20,
    maxhp: 20,
    vet: false,
    vetNow: false,
    att: 5,
    def: 1,
    bonus: 1,
    fort: false,
    range: false,
    retaliation: true,
    forceRetaliation: undefined,
    setHP: setHP,
    addBonus: addBonus,
    getOverride: getOverride
  }
}

function setHP(hpArray, replyData) {
  const currentHPArray = hpArray.filter(x => !isNaN(parseInt(x)))
  const currentHP = parseInt(currentHPArray[0])
  const vetHP = (this.vet) ? this.maxhp + 5 : this.maxhp
  if (currentHP < 1)
    throw 'One of the units is already dead. RIP.'

  if (hpArray.some(x => x === 'v')) {
    if (this.vet) {
      this.vetNow = true
      this.maxhp = vetHP
      if (!currentHP || currentHP > this.maxhp)
        this.currenthp = this.maxhp
      else
        this.currenthp = currentHP
    } else {
      if (!currentHP || currentHP > this.maxhp)
        this.currenthp = this.maxhp
      else
        this.currenthp = currentHP

      replyData.content.push([`The ${this.name} can't become a veteran, so we'll proceed without it!`, {}])
      replyData.deleteContent = true
    }
  } else if (currentHP > this.maxhp) {
    if (!this.vet) {
      replyData.content.push([`The ${this.name} can't become a veteran, so we'll proceed without it!`, {}])
      replyData.deleteContent = true
    } else {
      this.vetNow = true
      this.maxhp = vetHP
      if (currentHP > vetHP) {
        this.currenthp = vetHP
        replyData.content.push([`You have inputed a current hp higher than the maximum hp for ${this.name}.\nIn the meantime, this result calculates with the highest hp possible, ${vetHP}.`, {}])
        replyData.deleteContent = true
      } else {
        this.currenthp = currentHP
        replyData.content.push([`I just made the ${this.name} into a veteran for you!\nNext time, you can just add a \`v\` in there to ensure it's a veteran!`, {}])
        replyData.deleteContent = true
      }
    }
  } else {
    this.currenthp = currentHP
  }
}

function addBonus(bonusArray, replyData) {
  let defenseBonus = bonusArray.filter(value => value.toLowerCase() === 'w' || value.toLowerCase() === 'd' || value.toLowerCase() === 'p')
  defenseBonus = [...new Set(defenseBonus)] // Deletes doubles

  if (defenseBonus.length >= 2) {
    replyData.content.push(['You\'ve provided more than one bonus\nBy default, I take `w` over `d` if both are present.', {}])
    replyData.deleteContent = true
    if (defenseBonus.some(x => x.toLowerCase() === 'w') && this.fort === true)
      this.bonus = 4
    else
      this.bonus = 1.5
  } else {
    if (defenseBonus[0].toLowerCase() === 'd' || defenseBonus[0].toLowerCase() === 'p')
      this.bonus = 1.5
    else if (defenseBonus[0].toLowerCase() === 'w' && this.fort === true)
      this.bonus = 4
    else
      this.bonus = 1
  }
}

function onTheWater(navalArray) {
  if (this.bonus === 4)
    throw 'Are you saying a naval unit can be in a city :thinking:...'

  if (navalArray[0].toLowerCase().startsWith('bo')) {
    this.description = this.description + ' Boat'
    this.att = 1
    this.def = 1
    this.range = true
  }
  if (navalArray[0].toLowerCase().startsWith('sh')) {
    this.description = this.description + ' Ship'
    this.att = 2
    this.def = 2
    this.range = true
  }
  if (navalArray[0].toLowerCase().startsWith('bs')) {
    this.description = this.description + ' Battleship'
    this.att = 4
    this.def = 3
    this.range = true
  }
}

function getOverride(unitArray) {
  const overrides = unitArray.filter(x => x === 'r' || x === 'nr')
  if (overrides.length > 1)
    throw `Put your beer down and learn to type.\nYou can't put both \`r\` **and** \`nr\` for the ${this.currenthp}hp ${this.name}${this.description}...`
  else if (overrides.length === 0)
    return
  else {
    if (overrides[0] === 'r')
      this.forceRetaliation = true
    if (overrides[0] === 'nr')
      this.forceRetaliation = false
  }
}
