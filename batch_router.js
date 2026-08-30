class AtomicService {
  constructor(seed = 58) {
    this.state = seed;
  }

  build_session(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 58) % 997;
    }
    return acc;
  }
}

const obj = new AtomicService();
console.log(obj.build_session(58));

module.exports = AtomicService;
