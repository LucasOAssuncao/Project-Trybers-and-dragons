import Battle from './Battle';
import Monster from '../Monster';
import Fighter, { SimpleFighter } from '../Fighter';

export default class PVE extends Battle {
  private _character: Fighter;
  private _environment: Monster[] | SimpleFighter[] | Fighter[];

  constructor(
    character: Fighter,
    environment: Monster[] | SimpleFighter[] | Fighter[],
  ) {
    super(character);
    this._character = character;
    this._environment = environment;
  }

  public fight(): number {
    this._environment.every((e) => {
      if (this._character.lifePoints > 0 && e.lifePoints > 0) {
        this._character.attack(e);
        e.attack(this._character);
      }
      return this._character.lifePoints >= 0;
    });
    return super.fight();
  }
}
