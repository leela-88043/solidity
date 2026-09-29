import { network } from "hardhat";

const { viem } = await network.create();

const registry = await viem.deployContract("StudentRegistry");

const txHash = await registry.write.addStudent([1n, "Leela", 21n]);

console.log("Transaction Hash:", txHash);

const publicClient = await viem.getPublicClient();

const receipt = await publicClient.waitForTransactionReceipt({
  hash: txHash,
});
const transaction = await publicClient.getTransaction({
  hash: txHash,
});

console.log("From:", transaction.from);
console.log("To:", transaction.to);
console.log("Block:", transaction.blockNumber);
console.log("Value:", transaction.value.toString());
console.log("Gas:", receipt.gasUsed.toString());

console.log("Block Number:", receipt.blockNumber);

const student = await registry.read.getStudent([1n]);

console.log("Stored Name:", student[0]);
console.log("Stored Age:", student[1].toString());