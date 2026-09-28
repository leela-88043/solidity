import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { network } from "hardhat";

describe("Calculator", async function () {
  const { viem } = await network.create();

  it("should add two numbers", async function () {
    const calculator = await viem.deployContract("Calculator");

    const result = await calculator.read.add([10n, 20n]);

    assert.equal(result, 30n);
  });

  it("should subtract two numbers", async function () {
    const calculator = await viem.deployContract("Calculator");

    const result = await calculator.read.subtract([20n, 10n]);

    assert.equal(result, 10n);
  });

  it("should multiply two numbers", async function () {
    const calculator = await viem.deployContract("Calculator");

    const result = await calculator.read.multiply([10n, 5n]);

    assert.equal(result, 50n);
  });

  it("should divide two numbers", async function () {
    const calculator = await viem.deployContract("Calculator");

    const result = await calculator.read.divide([20n, 5n]);

    assert.equal(result, 4n);
  });
});