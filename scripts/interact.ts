import { network } from "hardhat";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

const first = BigInt(await rl.question("Enter first number: "));
const second = BigInt(await rl.question("Enter second number: "));

console.log("\nChoose operation:");
console.log("1. Add");
console.log("2. Subtract");
console.log("3. Multiply");
console.log("4. Divide");

const choice = await rl.question("Enter choice: ");

const { viem } = await network.create();
const calculator = await viem.deployContract("Calculator");

let result;

if (choice === "1") {
  result = await calculator.read.add([first, second]);
} else if (choice === "2") {
  result = await calculator.read.subtract([first, second]);
} else if (choice === "3") {
  result = await calculator.read.multiply([first, second]);
} else if (choice === "4") {
  result = await calculator.read.divide([first, second]);
} else {
  console.log("Invalid choice");
  rl.close();
  process.exit();
}

console.log("\nResult:", result.toString());

rl.close();