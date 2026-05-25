import { HeroFactory } from "./factory/HeroFactory";
import { Player } from "./players/Player";

const knight: Player = HeroFactory.createHero(
  "Knight",
  "Arthur",
  100,
  10,
);

const archer: Player = HeroFactory.createHero(
  "Archer",
  "Eldar",
  100,
  5,
);

(knight as any).attack(archer);

if (archer.getHealth() === 90) {
  console.log("TEST PASSED");
} else {
  console.log("TEST FAILED");
}