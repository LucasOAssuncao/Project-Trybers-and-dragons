export default abstract class Race {
  private readonly _name: string;
  private readonly _dexterity: number;

  constructor(name: string, dexterity: number) { 
    this._name = name;
    this._dexterity = dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  get name() { return this._name; }
  
  get dexterity() { return this._dexterity; }

  abstract get maxLifePoints(): number;
}