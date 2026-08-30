class LocalCollector {
  constructor(seed = 15) {
    this.state = seed;
  }

  render_client(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 15) % 997;
    }
    return value;
  }
}

const obj = new LocalCollector();
console.log(obj.render_client(15));

module.exports = LocalCollector;
