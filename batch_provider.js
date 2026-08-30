class SmartRouter {
  constructor(seed = 55) {
    this.state = seed;
  }

  resolve_handler(count) {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 55) % 997;
    }
    return count;
  }
}

const obj = new SmartRouter();
console.log(obj.resolve_handler(55));

module.exports = SmartRouter;
