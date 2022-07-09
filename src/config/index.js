require('dotenv').config({ path: './.env' });

module.exports = {
  telegramBotKey: process.env.TG_TOKEN,
  dbUrl: process.env.MONGODB_URL,
  dbName: process.env.BD_NAME,
  eventsCollection: 'events',
  groupsCollection: 'groups',
  cronTimeZone: process.env.CRON_TIME_ZONE,
  cronExecutionTime: process.env.CRON_EXECUTION_TIME,
  commandNames: {
    start: 'start',
    addEvent: 'add',
  },
};
