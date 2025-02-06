const axios = require('axios');
const { telegramBotToken, telegramGroupChatId } = require('./index');

const sendTelegramMessage = async (message, retries = 3) => {
  const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
  const payload = {
    chat_id: telegramGroupChatId,
    text: message,
    parse_mode: 'Markdown',
    disable_web_page_preview: true,
  };

  try {
    const response = await axios.post(url, payload);
    return response.data;
  } catch (error) {
    if (retries > 0) {
      console.error(`Telegram API call failed. Retrying (${retries} attempts left)...`);
      return sendTelegramMessage(message, retries - 1);
    } else {
      console.error('Telegram API call failed after multiple retries:', error.message);
      throw error;
    }
  }
};

module.exports = { sendTelegramMessage };