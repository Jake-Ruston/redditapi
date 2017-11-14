const fetch = require('node-fetch');

class Request {
  constructor(token) {
    this.token = token;
    this.options = {
      headers: {
        'Authorization': `bearer ${token}`
      }
    };
  }

  async authorize() {
    const response = await fetch('https://oauth.reddit.com/api/v1/me', this.options);
    const data = await response.json();
    if (data.error === 401) throw new Error('Invalid Access Token.');
    if (data.error === 404) throw new Error('Endpoint not found. Please contact the developer.');
    return this.token;
  }
}

module.exports = Request;
