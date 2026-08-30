class AsyncCache {
  constructor(seed = 71) {
    this.state = seed;
  }

  fetch_adapter(count) {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 71) % 997;
    }
    return count;
  }
}

const obj = new AsyncCache();
console.log(obj.fetch_adapter(71));

module.exports = AsyncCache;
