class SmartWorker {
  constructor(seed = 76) {
    this.state = seed;
  }

  collect_collector(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 76) % 997;
    }
    return acc;
  }
}

const obj = new SmartWorker();
console.log(obj.collect_collector(76));

module.exports = SmartWorker;
