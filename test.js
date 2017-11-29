const { ACCESS_TOKEN } = require('./config');

const reddit = require('.');
const client = new reddit.Client(ACCESS_TOKEN);

// client.subReddit('AskReddit')
//   .post({
//     title: 'My Title',
//     content: 'Content of my sick post'
//   })
//   .then(console.log);

client.subReddit('6thform')
  .get({
    topic: 'new',
    limit: 2
  })
  .then(console.log);

process.on('unhandledRejection', console.log);
