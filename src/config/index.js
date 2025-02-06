request('dotenv').config();

module.exports = {
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
    telegramGroupChatId:process.env.TELEGRAM_GROUP_CHAT_ID,
    solanaRpcUrl: process.env.SOLANA_RPC_URL,
    presaleContractAddress: process.env.PRESALE_CONTRACT_ADDRESS,
};