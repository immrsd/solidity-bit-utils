import { ethers } from "hardhat";
import chai from "chai";
import { solidity } from "ethereum-waffle";
import { BitUtils, BitUtils__factory, Example, Example__factory } from "../typechain";
import { before } from "mocha";

chai.use(solidity);
const { expect } = chai;

let library: BitUtils;
beforeEach(async () => {
  const [deployer, caller] = await ethers.getSigners();
  const factory = new BitUtils__factory(deployer);
  const contract = await factory.deploy();
  const address = contract.address;
  library = new BitUtils__factory(caller).attach(address);
});

describe("Test library", () => {

  it("Set bit at 0 (solidity)", async () => {
    const result = await library.setBit(0, 0);
    expect(result).to.eq(1);
  })

  it("Set bit at 5 (solidity)", async () => {
    const result = await library.setBit(0, 5);
    expect(result).to.eq(32);
  })

  it("Set bit at 0 (assembly)", async () => {
    const result = await library.setBitAssembly(0, 0);
    expect(result).to.eq(1);
  })

  it("Set bit at 5 (assembly)", async () => {
    const result = await library.setBitAssembly(0, 5);
    expect(result).to.eq(32);
  })

  it("Is bit set 0 (solidity)", async () => {
    const result = await library.isBitSet(1, 0);
    expect(result).to.eq(true);
  })

  it("Is bit set 0 (solidity)", async () => {
    const result = await library.isBitSet(32, 0);
    expect(result).to.eq(false);
  })

  it("Is bit set 0 (assembly)", async () => {
    const result = await library.isBitSetAssembly(1, 0);
    expect(result).to.eq(true);
  })

  it("Is bit set 0 (assembly)", async () => {
    const result = await library.isBitSetAssembly(32, 0);
    expect(result).to.eq(false);
  })

  it("Is bit set 5 (solidity)", async () => {
    const result = await library.isBitSet(1, 5);
    expect(result).to.eq(false);
  })

  it("Is bit set 5 (solidity)", async () => {
    const result = await library.isBitSet(32, 5);
    expect(result).to.eq(true);
  })

  it("Is bit set 5 (assembly)", async () => {
    const result = await library.isBitSetAssembly(1, 5);
    expect(result).to.eq(false);
  })

  it("Is bit set 5 (assembly)", async () => {
    const result = await library.isBitSetAssembly(32, 5);
    expect(result).to.eq(true);
  })
})
