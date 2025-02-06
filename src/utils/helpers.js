const validateBuyData = (data) => {
    const requiredFields = ['date', 'amountUsdt', 'amountValue', 'txHash', 'buyerType'];
    return requiredFields.every((field) => data[field]);
  };
  
  const formatBuyMessage = (buyData) => {
    return (
      `Rich Pug ($PUG) Token Sale! 💥\n` +
      `Rich Pug is here to make us rich 🤑, witness the biggest presale\n\n` +
      `Date: ${buyData.date}\n` +
      `Amount: ${buyData.amountUsdt} ($${buyData.amountValue})\n` +
      `TX: [View on Solscan](https://solscan.io/tx/${buyData.txHash})\n` +
      `Buyer: ${buyData.buyerType}\n\n` +
      `[Trailer](https://youtu.be/ZPeKaW7kYq0?si=TBd8nN4yjyTUWrqp) | ` +
      `[Website](https://www.richpug.com/) | ` +
      `[X (Twitter)](https://x.com/richpugtoken) | ` +
      `[TG Discussion](https://t.me/richpug)`
    );
  };
  
  module.exports = { validateBuyData, formatBuyMessage };