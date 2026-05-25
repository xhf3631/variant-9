import { Player } from "./Player";

export class Archer extends Player {
  private iceArrowCount: number = 0;

  public attack(target: Player): void {
    target.takeDamage(this.strength);

    console.log(
      `(Archer) ${this.name} attacks ${target.getName()} for ${this.strength} damage`,
    );
  }

  public useIceArrow(target: Player): void {
    if (this.iceArrowCount < 2) {
      target.takeDamage(this.strength + 5);

      this.iceArrowCount++;

      console.log(
        `(Archer) ${this.name} uses Ice Arrow on ${target.getName()}`,
      );
    }
  }
}