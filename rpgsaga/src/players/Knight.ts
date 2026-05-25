import { Player } from "./Player";

export class Knight extends Player {
  public attack(target: Player): void {
    target.takeDamage(this.strength);

    console.log(
      `(Knight) ${this.name} attacks ${target.getName()} for ${this.strength} damage`,
    );
  }

  public useAbility(target: Player): void {
    const damage = Math.floor(this.strength * 1.3);

    target.takeDamage(damage);

    console.log(
      `(Knight) ${this.name} uses Revenge Strike for ${damage} damage`,
    );
  }
}