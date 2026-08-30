class StreamService {
  constructor(seed = 55) {
    this.state = seed;
  }

  collect_builder(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 55) % 997;
    }
    return acc;
  }
}

const obj = new StreamService();
console.log(obj.collect_builder(55));

module.exports = StreamService;
