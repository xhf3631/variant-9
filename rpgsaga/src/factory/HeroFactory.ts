import { Knight } from "../players/Knight";
import { Archer } from "../players/Archer";
import { Mage } from "../players/Mage";
import { Player } from "../players/Player";

export class HeroFactory {
  public static createHero(
    type: string,
    name: string,
    health: number,
    strength: number,
  ): Player {
    switch (type) {
      case "Knight":
        return new Knight(name, health, strength);

      case "Archer":
        return new Archer(name, health, strength);

      case "Mage":
        return new Mage(name, health, strength);

      default:
        throw new Error("Unknown hero type");
    }
  }
}