const { Connection, PublicKey } = require('@solana/web3.js');
const { solanaRpcUrl, presaleContractAddress } = require('../config');
const { sendTelegramMessage } = require('./telegramService');
const Buy = require('../models/buy');

const connection = new Connection(solanaRpcUrl, 'confirmed');
const presaleContractPublicKey = new PublicKey(presaleContractAddress);

const listenForPresaleBuys = async () => {
  console.log('Listening for $PUG presale buys...');

  try {
    // Subscribe to logs for the presale contract
    connection.onLogs(
      presaleContractPublicKey,
      async (logs, context) => {
        try {
          if (logs.err) {
            console.error('Transaction failed:', logs.err);
            return;
          }

          // Fetch the transaction details 
          const transaction = await connection.getTransaction(context.signature, {
            commitment: 'confirmed',
            maxSupportedTransactionVersion: 0, 
          });

          // Parse the transaction to extract buy details
          const buyData = parsePresaleTransaction(transaction);
          if (buyData) {
            // Create a Buy object
            const buy = new Buy(
              buyData.date,
              buyData.amountUsdt,
              buyData.amountValue,
              buyData.txHash,
              buyData.buyerType
            );

            // Format and send the buy message to Telegram
            const message = buy.toMessage();
            await sendTelegramMessage(message);
          }
        } catch (error) {
          console.error('Error processing transaction:', error.message);
        }
      },
      'confirmed'
    );
  } catch (error) {
    console.error('Error connecting to Solana blockchain:', error.message);
    // Retry connecting after a delay
    setTimeout(listenForPresaleBuys, 5000);
  }
};

const parsePresaleTransaction = (transaction) => {
  try {
    // Extract relevant data from the transaction
    // This is a placeholder; you'll need to customize it based on the presale contract's transaction structure
    const buyer = transaction.transaction.message.accountKeys[0].toBase58();
    const amountUsdt = '300 USDT'; // Replace with actual logic to parse the amount
    const amountValue = '300.30'; // Replace with actual logic to parse the value
    const txHash = transaction.transaction.signatures[0];
    const buyerType = 'Existing Holder'; // Replace with actual logic to determine buyer type

    return {
      date: new Date().toISOString(),
      amountUsdt,
      amountValue,
      txHash,
      buyerType,
    };
  } catch (error) {
    console.error('Error parsing transaction:', error.message);
    return null;
  }
};

module.exports = { listenForPresaleBuys };