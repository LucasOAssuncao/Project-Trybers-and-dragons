import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private readonly _name: string;
  private readonly _special: number;
  private readonly _cost: number;
  
  constructor(name: string) { 
    this._name = name;
    this._special = 0;
    this._cost = 0;
  }
  
  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }
  
  get name() { return this._name; }

  get special() { return this._name; }
  
  get cost() { return this._name; }
  
  abstract get energyType(): EnergyType;
}