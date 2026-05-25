import { Knight } from "./players/Knight";
import { Archer } from "./players/Archer";

const knight = new Knight("Arthur", 100, 10);

const archer = new Archer("Eldar", 100, 5);

knight.attack(archer);

if (archer.getHealth() === 90) {
  console.log("TEST PASSED");
} else {
  console.log("TEST FAILED");
}