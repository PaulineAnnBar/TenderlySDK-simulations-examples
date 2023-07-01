# Tenderly Simulation Example 

This repository provides a basic example of how to use Tenderly SDK to simulate transactions for both single transactions and bundle transactions. It demonstrates the usage of Tenderly simulations integrated into decentralized applications.

## Examples 💻
- [basic-simulation.js](simulations-examples/basic-simulation.js): Code for running a basic transaction simulation using Tenderly SDK.
- [advanced-simulation.js](simulations-examples/advanced-simulation.js): Code for running a bundles transaction simulation using Tenderly SDK.

For more information on Tenderly SDK and simulations, refer to the [Tenderly SDK documentation](https://docs.tenderly.co/tenderly-sdk/tutorials-and-quickstarts/how-to-simulate-transactions-with-tenderly-sdk).

## Usage 🛠
To run the basic simulation example:

1. Install Node.js on your machine if you haven't already.
2. Clone this repository:`git clone https://github.com/your-username/TenderlySDK-simulations-examples.git`
4. Navigate to the root folder and install the required dependencies:
   `npm install @tenderly/sdk`  
5. Open the `basic-simulations.js` file and replace the placeholder values in the `tenderly` configuration object with your actual Tenderly account information. (Same process for the `advanced-simulation.js`)
6. Run the simulation:
   `node simulations-examples/basic-simulation.js` | `node simulations-examples/advanced-simulation.js`

⚠️ Please note that you need to have a valid Tenderly account and obtain the necessary account details to run the simulations successfully.
You can find your account details here: https://docs.tenderly.co/other/platform-access/how-to-find-the-project-slug-username-and-organization-name#username

For more information and detailed tutorials, refer to the 👉 [Tenderly documentation](https://docs.tenderly.co/).
