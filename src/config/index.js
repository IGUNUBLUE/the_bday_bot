require('dotenv').config({ path: './.env' });

module.exports = {
  telegramBotKey: process.env.TG_TOKEN,
  dbUrl: `${process.env.DB_URL}/${process.env.BD_NAME}`,
  eventsCollection: 'events',
  configurationsCollection: 'configurations',
  cronTimeZone: process.env.CRON_TIME_ZONE,
  cronExecutionTime: process.env.JOB_EXECUTION_TIME,
  commandNames: {
    start: 'start',
    addEvent: 'add',
  },
};
