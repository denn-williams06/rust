class StreamController {
  constructor(seed = 49) {
    this.state = seed;
  }

  sync_monitor(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 49) % 997;
    }
    return acc;
  }
}

const obj = new StreamController();
console.log(obj.sync_monitor(49));

module.exports = StreamController;
