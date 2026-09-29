// this file is about the Student interaction page using type script 
import { network } from "hardhat";
import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

const { viem } = await network.create();
const registry = await viem.deployContract("StudentRegistry");

while (true) {
  console.log("\n1. Add Student");
  console.log("2. Get Student");
  console.log("3. Exit");

  const choice = await rl.question("Enter choice: ");

  if (choice === "1") {
    const id = BigInt(await rl.question("Enter ID: "));
    const name = await rl.question("Enter name: ");
    const age = BigInt(await rl.question("Enter age: "));

    await registry.write.addStudent([id, name, age]);

    console.log("Student added successfully!");
  } 
  
  else if (choice === "2") {
    const id = BigInt(await rl.question("Enter ID: "));

    const student = await registry.read.getStudent([id]);

    console.log("Name:", student[0]);
    console.log("Age:", student[1].toString());
  } 
  
  else if (choice === "3") {
    break;
  }
}

rl.close();
