import { Player } from "./Player";

export class Archer extends Player {
  public attack(target: Player): void {
    target.takeDamage(this.strength);
  }
}