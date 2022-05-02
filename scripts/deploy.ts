import { ethers } from 'hardhat';
import { Contract, ContractFactory } from 'ethers';

async function main(): Promise<void> {
  const contractName = 'BitUtils';
  const factory: ContractFactory = await ethers.getContractFactory(
    contractName
  );
  const contract: Contract = await factory.deploy();
  await contract.deployed();
  console.log(`${contractName} deployed to: ${contract.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
