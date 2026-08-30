class FastLoader {
  constructor(seed = 71) {
    this.state = seed;
  }

  run_collector(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 71) % 997;
    }
    return acc;
  }
}

const obj = new FastLoader();
console.log(obj.run_collector(71));

module.exports = FastLoader;
