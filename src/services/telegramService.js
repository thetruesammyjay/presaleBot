const axios = require('axios');
const { telegramBotToken, telegramGroupChatId } = require('../config');

const sendTelegramMessage = async (message) => {
  const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
  const payload = {
    chat_id: telegramGroupChatId,
    text: message,
    parse_mode: 'Markdown',
    disable_web_page_preview: true,
  };
  const response = await axios.post(url, payload);
  return response.data;
};

module.exports = { sendTelegramMessage };