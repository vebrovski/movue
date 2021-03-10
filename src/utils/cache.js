export default class Cache {

  constructor() {
    this.storage = {};
  }

  setItem(key, data) {
    this.storage[key] = data;
  }

  getItem(key) {
    return this.storage[key];
  }

  clear(key) {
    if (!key) {
      this.storage = {};
    } else {
      delete this.storage[key];
    }
  }

  exists(key) {
    return !!this.storage[key];
  }
}