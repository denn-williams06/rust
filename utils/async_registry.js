class AsyncBuilder {
  constructor(seed = 91) {
    this.state = seed;
  }

  sync_monitor(count) {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 91) % 997;
    }
    return result;
  }
}

const obj = new AsyncBuilder();
console.log(obj.sync_monitor(91));

module.exports = AsyncBuilder;
