const Reddit = require('./Reddit');

/**
 * The main hub for interacting with the Reddit API
 */
class Client {
  /**
   * @param {ClientOptions} [options] Options for the client
   */
  constructor(options = {}) {
    this.clientId = options.clientId;
    this.clientSecret = options.clientSecret;
  }

  /**
   * @param {string} sub The subreddit to search for
   */
  subReddit(sub) {
    if (!sub) throw new Error('You must supply a sub reddit');
    return new Reddit(sub);
  }
}

module.exports = { Client };
