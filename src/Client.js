const Post = require('./Post');
const { get } = require('snekfetch');

/**
  * @param {string} subReddit The sub reddit to search for
  * @param {number} amount The amount of searches to return
  * @param {string} topic Either `hot`, `new`, `rising`, `controversial` or `top`
  * @returns {Promise<Object>} Object containing posts for this sub reddit
  */

module.exports = (subReddit, amount, topic = 'new') => {
  return new Promise(async (resolve, reject) => {
    if (typeof subReddit !== 'string' || typeof subReddit === 'undefined') reject('You must supply a sub reddit to search for.');
    typeof amount === 'undefined'
      ? reject('You must supply an amount of posts to search for.')
      : isNaN(parseInt(amount))
      ? reject('Amount must be a number 0-9.')
      : amount < 1 || amount > 24
      ? reject('Amount must be between 1 and 25.')
      : true;

    const data = await get(`https://www.reddit.com/r/${subReddit}/${topic}.json`);
    if (!data.body.data.children.length) reject('That sub reddit does not exist or there are no posts.');
    resolve({
      searches: data.body.data.children.length - 1,
      posts: data.body.data.children.slice(25 - amount).map(post => new Post(post))
    });
  });
};
