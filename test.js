const reddit = require('.');

reddit('AskReddit', 1).then(data => {
  console.log(data.posts[0].minified());
});

process.on('unhandledRejection', console.error);
