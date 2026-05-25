import { Player } from "./Player";

export class Mage extends Player {
  public attack(target: Player): void {
    target.takeDamage(this.strength);
  }

  public useAbility(target: Player): void {
    console.log(`${this.getName()} used magic`);
  }
}