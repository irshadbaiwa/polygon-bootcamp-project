import { ethers } from "hardhat";

async function main() {
  const Election = await ethers.getContractFactory("Election");

  // deploy
  const admin = process.env.ADMIN_ADDRESS || '0x7dA3d95CA4796D9E1d03591AcF4AFB54a9F0222b'; // use this address as admin
  const startTimestamp = Math.round(new Date('2022-12-01').getTime() / 1000); // 1st Dec, 2022
  const endTimestamp = Math.round(new Date('2023-06-01').getTime() / 1000); // 1st June, 2023
  const election_contract = await Election.deploy(admin, startTimestamp, endTimestamp);

  console.log('Contract deployed to address:', election_contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
