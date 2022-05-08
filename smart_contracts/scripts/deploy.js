const main = async () => {
  const Transactions = await hre.ethers.getContractFactory('Transactions');
  const transactions = await transactions.deploy('');

  await greeter.deployed();

  console.log('Transactions deployed to:', transactions.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
