export class Player {
  protected name: string;
  protected health: number;
  protected strength: number;

  constructor(name: string, health: number, strength: number) {
    this.name = name;
    this.health = health;
    this.strength = strength;
  }

  public getName(): string {
    return this.name;
  }

  public getHealth(): number {
    return this.health;
  }

  public takeDamage(damage: number): void {
    this.health -= damage;
  }
}