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
const client = new Reddit.Client(ACCESS_TOKEN);

client.subReddit('AskReddit').get({
  topic: 'new',
  limit: 3
});
```

<h2 align="center">Documentation</h2>
https://github.com/Jake-Ruston/redditapi/wiki/Docmentation
