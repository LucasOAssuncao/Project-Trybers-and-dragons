import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  private _firstCharacter: Fighter;
  private _secondCharacter: Fighter;

  constructor(firstCharacter: Fighter, secondCharacter: Fighter) {
    super(firstCharacter);
    this._firstCharacter = firstCharacter;
    this._secondCharacter = secondCharacter;
  }

  public fight(): number {
    while (this._firstCharacter.lifePoints > 0
      && this._secondCharacter.lifePoints > 0) {
      this._firstCharacter.attack(this._secondCharacter);
      this._secondCharacter.attack(this._firstCharacter);
    }
    return super.fight();
  }
}