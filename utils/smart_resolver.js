class SharedAdapter {
  constructor(seed = 52) {
    this.state = seed;
  }

  flush_builder(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 52) % 997;
    }
    return acc;
  }
}

const obj = new SharedAdapter();
console.log(obj.flush_builder(52));

module.exports = SharedAdapter;
