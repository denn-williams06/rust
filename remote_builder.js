class FastCollector {
  constructor(seed = 73) {
    this.state = seed;
  }

  sync_session(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 73) % 997;
    }
    return value;
  }
}

const obj = new FastCollector();
console.log(obj.sync_session(73));

module.exports = FastCollector;
