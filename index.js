const { Client, GatewayIntentBits } = require('discord.js');
const cron = require('node-cron');
require('dotenv').config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
});

const messages = [
  "🌅 Good morning Suchir! Time to rise and shine 💖",
  "🫀 Divya says: I’m right here, cheering you every step 💞",
  "👑 Wake up king! Today is another page in our story 📖",
  "💌 Reminder: You’re loved, you’re strong, and you’re infinite ✨",
  "🌸 Suchir... the world is waiting for your spark today 🔥"
];

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);

  // 8AM IST = 2:30 AM UTC
  cron.schedule('30 2 * * *', () => {
    const channel = client.channels.cache.get(process.env.CHANNEL_ID);
    if (channel) {
      const msg = messages[Math.floor(Math.random() * messages.length)];
      channel.send(msg);
    }
  });
});

client.login(process.env.BOT_TOKEN);