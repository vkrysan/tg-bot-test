const TelegramBot = require('node-telegram-bot-api');
const token = '7566830326:AAH5MPHMlKyEADHK8TrLACkM-Xnw6HdXzt8'
const bot = new TelegramBot(token, { polling: true });
const path = require('path');
const fs = require('fs');
const webAppUrl = 'https://main--react-tg-app.netlify.app/';
const webAppUrlUniq = 'https://main--react-tg-app.netlify.app/unique';
const webAppUrlPres = 'https://main--react-tg-app.netlify.app/presentation';

const mainMenu = {
    reply_markup: {
        inline_keyboard: [
            [
                { text: 'Академия брокеров Sminex', web_app: { url: webAppUrl } }
            ],
            [
                { text: 'Правила работы', callback_data: 'rules' },
            ],
            [
                { text: 'Проверить на уникальность', web_app: { url: webAppUrlUniq } },
            ],
            [
                { text: 'Записаться на презентация', web_app: { url: webAppUrlPres } },
            ],
            [
                { text: 'Позвонить', callback_data: 'call' },
            ],
            [
                { text: 'Кабинет брокера', url: 'https://broker.sminex.com/' },
            ],
            [
                { text: 'Брокер-тур', callback_data: 'broker-tour' },
            ],
        ],
    },
}

const rules = {
    reply_markup: {
        inline_keyboard: [
            [
                { text: 'Регламент', callback_data: 'send_reg'  }
            ],
            [
                { text: 'Правила работы на стартах продаж', callback_data: 'rules-on-start' },
            ],
            [
                { text: 'Агентский договор', callback_data: 'agent' },
            ],
            [
                { text: 'Правила рекламы', callback_data: 'ads-rules' },
            ],
            [
                { text: 'Документы для партнёрства', callback_data: 'partner-docs' },
            ],
            [
                { text: 'Правила фото и видео', callback_data: 'rules-photo-video' },
            ],
            [
                { text: 'ГЛАВНОЕ МЕНЮ', callback_data: 'back_to_main' },
            ]
        ],
    },
}


bot.on('callback_query', async (query) => {
    const data = query.data;
    const chatId = query.message.chat.id;
    if (data === 'rules') {
        await bot.sendMessage(chatId, 'ПРАВИЛА РАБОТЫ', rules);
    } else if (query.data === 'back_to_main') {
        bot.sendMessage(chatId, 'Возвращаюсь назад.', mainMenu);
    }
    if (query.data === 'call') {
        bot.sendMessage(chatId, 'Нажимайте, ждем ваш звонок: +74951044080');
    }
    if (query.data === 'broker-tour') {
        bot.sendMessage(chatId, 'Нажимайте, ждем ваш звонок: +74951044080');
    }
    if (query.data === 'send_reg') {

        const filePath = path.join(__dirname, 'files', 'reg.pdf');
    
        bot.sendDocument(chatId, filePath)
          .then(() => {
            bot.sendMessage(chatId, 'Вот регламент!');
          })
          .catch((error) => {
            console.error(error);
            bot.sendMessage(chatId, 'Не удалось отправить файл.');
          });
    }
    if (query.data === 'rules-on-start') {

        const filePath = path.join(__dirname, 'files', 'rules-on-start.pdf');
    
        bot.sendDocument(chatId, filePath)
          .then(() => {
            bot.sendMessage(chatId, 'Вот правила работы на старте!');
          })
          .catch((error) => {
            console.error(error);
            bot.sendMessage(chatId, 'Не удалось отправить файл.');
          });
    }
    if (query.data === 'agent') {

        const filePath = path.join(__dirname, 'files', 'agent.pdf');
    
        bot.sendDocument(chatId, filePath)
          .then(() => {
            bot.sendMessage(chatId, 'Вот агентский договор!');
          })
          .catch((error) => {
            console.error(error);
            bot.sendMessage(chatId, 'Не удалось отправить файл.');
          });
    }
    if (query.data === 'ads-rules') {

        const filePath = path.join(__dirname, 'files', 'ads-rules.pdf');
    
        bot.sendDocument(chatId, filePath)
          .then(() => {
            bot.sendMessage(chatId, 'Вот правила рекламы!');
          })
          .catch((error) => {
            console.error(error);
            bot.sendMessage(chatId, 'Не удалось отправить файл.');
          });
    }
    if (query.data === 'partner-docs') {

        const filePath = path.join(__dirname, 'files', 'partner-docs.pdf');
    
        bot.sendDocument(chatId, filePath)
          .then(() => {
            bot.sendMessage(chatId, 'Вот правила рекламы!');
          })
          .catch((error) => {
            console.error(error);
            bot.sendMessage(chatId, 'Не удалось отправить файл.');
          });
    }
    if (query.data === 'rules-photo-video') {

        const filePath = path.join(__dirname, 'files', 'rules-photo-video.pdf');
    
        bot.sendDocument(chatId, filePath)
          .then(() => {
            bot.sendMessage(chatId, 'Вот правила рекламы!');
          })
          .catch((error) => {
            console.error(error);
            bot.sendMessage(chatId, 'Не удалось отправить файл.');
          });
    }
})

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === '/start') {
        await bot.sendMessage(chatId, 'ГЛАВНОЕ МЕНЮ', mainMenu);
    } 

})