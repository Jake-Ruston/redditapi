# Reddit
A simple to use module for interacting with the Reddit API.

## Install
```
$ npm install redditapi
```
## How to
```js
// require the package
const reddit = require('redditapi');
reddit('AskReddit', 13, 'hot').then(data => console.log(data));
```
- `sub reddit` is required and must be a string.
- `amount` is required and must be a string.
- `topic` is `new` by default. Possible topics are `hot`, `new`, `rising`, `controversial`, `top`.

## Methods
```js
Post.minified(); // returns the data without null values
```
