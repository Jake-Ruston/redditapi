const fetch = require('node-fetch');

const constants = require('./util/constants');
const SubReddit = require('./SubReddit');

class Reddit {
  constructor(sub) {
    this.sub = sub;
  }

  /**
   * @param limit The amount of posts to saerch for
   */
  async get({ topic: topic = '', limit: limit = 10 }) {
    topic = topic.toLowerCase();
    limit = Number(limit);
    const fetched = await fetch(`https://reddit.com/r/${this.sub}/${topic}.json`);
    const json = await fetched.json();
    if (isNaN(limit)) return JSON.stringify(constants.errors.invalidLimit, null, 2);
    if (json.data === 404) return JSON.stringify(constants.errors.invalidTopic, null, 2);
    if (!json.data.children.length) return JSON.stringify(constants.errors.invalidSub, null, 2);
    return limit == 1 ? new SubReddit(json.data.children[0]) : json.data.children.slice(0, limit).map(sub => new SubReddit(sub));
  }

  /**
   * @param title The title of the post
   * @param content The content of the post
   */
  async post({ title: title, content: content }) {
    return await {
      title: title,
      content: content
    };
  }
}

module.exports = Reddit;
