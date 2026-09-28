import { network } from "hardhat";

const { viem } = await network.create();

const calculator = await viem.deployContract("Calculator");

console.log("Calculator deployed at:", calculator.address);