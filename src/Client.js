const Request = require('./misc/Request');

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
   * Authorizes the client
   * @param {string} token Access Token of the account to authorize
   * @returns {Promise<string>} Access Token of the account used
   */
  authorize(token) {
    return new Request(token).authorize();
  }
}

module.exports = { Client };

// authorizeUser(username, password) {
//   return new Promise((resolve, reject) => {
//     request('https://www.reddit.com/api/v1/access_token', {
//       method: 'POST',
//       form: { grant_type: 'password', username: username, password: password },
//       auth: { username: this.clientId, password: this.clientSecret }
//     }, (error, response, body) => {
//       if (error) reject(error);
//       resolve(body);
//     });
//   });
// }
