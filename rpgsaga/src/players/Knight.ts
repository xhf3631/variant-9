import { Player } from "./Player";

export class Knight extends Player {
  public attack(target: Player): void {
    target.takeDamage(this.strength);
  }
}