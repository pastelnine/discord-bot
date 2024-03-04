# Steps

1. Add a `config.js` file with content:
```js
export const PREFIX = ["!"]; // your bot's message command prefix. example: !help
export const BOT_TOKEN = "--- Your Bot's Tokeb";
export const OWNER_IDS = ["Your USER ID", "Other bot owner user ID"];
export const MONGODB_URI = "mongodb+srv:// --- Your MONGO DB Connection String";
```

2. Install all required packages: `npm i`


3. Start the bot: `node bot.js` or `node .`
