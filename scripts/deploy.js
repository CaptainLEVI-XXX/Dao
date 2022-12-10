
const hre = require("hardhat");

async function main() {
  const Dao = await hre.ethers.getContractFactory("Dao");
  const contract = await Dao.deploy();

  await contract.deployed();

  console.log(
    `Dao deployed to ${contract.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
