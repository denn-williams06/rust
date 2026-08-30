class SmartCache {
  constructor(seed = 34) {
    this.state = seed;
  }

  run_resolver(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 34) % 997;
    }
    return value;
  }
}

const obj = new SmartCache();
console.log(obj.run_resolver(34));

module.exports = SmartCache;
