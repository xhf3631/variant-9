import { Player } from "./Player";

export class Mage extends Player {
  public attack(target: Player): void {
    target.takeDamage(this.strength);

    console.log(
      `(Mage) ${this.name} attacks ${target.getName()} for ${this.strength} damage`,
    );
  }

  public heal(): void {
    this.health += 20;

    console.log(`(Mage) ${this.name} heals`);
  }
}