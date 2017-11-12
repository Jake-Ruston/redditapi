<h1 align="center">
  <a href="https://www.npmjs.com/package/redditapi">RedditAPI</a>
</h1>
<p align="center">A simple to use module for interacting with the Reddit API.</p>

<h2 align="center">Install</h2>
```bash
npm i redditapi
```

<h2 align="center">Example Usage</h2>
```js
const Reddit = require('redditapi');
const client = new Reddit.Client({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET
});

client.subReddit('AskReddit').post({
  title: 'Reddit, what do you think of my API wrapper?',
  content: '~~Pretty neat, huh?~~'
});

client.authorize(ACCESS_TOKEN);
```

<h2 align="center">Documentation</h2>
https://google.com
