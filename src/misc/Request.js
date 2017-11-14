class Request {
  constructor(token) {
    this.token = token;
  }

  async authorize() {
    const token = await this.token;
    return token;
  }
}

module.exports = Request;
