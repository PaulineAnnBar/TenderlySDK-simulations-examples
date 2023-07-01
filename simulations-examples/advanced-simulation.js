const { Tenderly, Network } = require("@tenderly/sdk");

const tenderly = new Tenderly({
  accountName: "your-account-name",
  projectName: "your-project-name",
  accessKey: "your-access-key",
  network: Network.Mainnet,
});

const simulations = await tenderly.simulator.simulateBundle({
  transactions: [
    {
      from: fromWalletAddress,
      to: myTokenAddress,
      gas: 0,
      gas_price: "0",
      value: 0,
      input: myTokenAbiInterface.encodeFunctionData("approve", [
        toWalletAddress,
        1234567890,
      ]),
    },
    {
      from: toWalletAddress,
      to: myTokenAddress,
      gas: 0,
      gas_price: "0",
      value: 0,
      input: myTokenAbiInterface.encodeFunctionData("transferFrom", [
        fromWalletAddress,
        toWalletAddress,
        1234567890,
      ]),
    },
  ],
  blockNumber: 3262454,
  overrides: {
    [myTokenAddress]: {
      state: {
        [`_balances[${fromWalletAddress}]`]: "1234567891",
      },
    },
  },
});

//check the output of simulations
console.log("bundle simulation :", simulations);
