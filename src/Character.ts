import Fighter from './Fighter/Fighter';
import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _name: string;

  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
    this._name = name;
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    return {
      ...this._energy,
    };
  }

  receiveDamage(attackPoints: number): number {
    const hit = attackPoints - this._defense;
    if (hit > 0) this._lifePoints -= hit;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this.strength);
  }

  levelUp(): void {
    const toIncrement = getRandomInt(1, 10);
    if (this._lifePoints + toIncrement < this._race.maxLifePoints) {
      this._maxLifePoints += toIncrement;
    } else {
      this._maxLifePoints = this.race.maxLifePoints;
    }
    this._energy.amount = 10;
    this._strength += toIncrement;
    this._dexterity += toIncrement;
    this._defense += toIncrement;
    this._lifePoints = this._maxLifePoints;
  }
}
