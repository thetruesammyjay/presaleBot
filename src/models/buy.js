class Buy {
    constructor(date, amountUsdt, amountValue, txHash, buyerType) {
      this.date = date;
      this.amountUsdt = amountUsdt;
      this.amountValue = amountValue;
      this.txHash = txHash;
      this.buyerType = buyerType;
    }
  
    toMessage() {
      return (
        `Rich Pug ($PUG) Token Sale! 💥\n` +
        `Rich Pug is here to make us rich 🤑, witness the biggest presale\n\n` +
        `Date: ${this.date}\n` +
        `Amount: ${this.amountUsdt} ($${this.amountValue})\n` +
        `TX: [View on Solscan](https://solscan.io/tx/${this.txHash})\n` +
        `Buyer: ${this.buyerType}\n\n` +
        `[Trailer](https://youtu.be/ZPeKaW7kYq0?si=TBd8nN4yjyTUWrqp) | ` +
        `[Website](https://www.richpug.com/) | ` +
        `[X (Twitter)](https://x.com/richpugtoken) | ` +
        `[TG Discussion](https://t.me/richpug)`
      );
    }
  }
  
  module.exports = Buy;