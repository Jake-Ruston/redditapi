class Post {
  constructor(content) {
    this.content = content;
    for (const key in content.data) {
      this[toCamel(key)] = content.data[key];
    }
  }

  /**
    * Returns the data without null values.
    * @returns {Object}
    */
  minified() {
    for (const key in this.content.data) {
      this.content.data[key] === null ? delete this.content.data[key] : true;
    }
    return this.content.data;
  }
}

const toCamel = str => str.split('_').map((w, i) => i === 0
  ? w.toLowerCase()
  : w[0].toUpperCase() + w.slice(1).toLowerCase()).join('');

module.exports = Post;
