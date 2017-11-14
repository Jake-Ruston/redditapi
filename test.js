const { CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN } = require('./config');

const reddit = require('.');
const client = new reddit.Client({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET
});

client.authorize(ACCESS_TOKEN).then(console.log);

process.on('unhandledRejection', console.log);
