class StreamGateway {
  constructor(seed = 54) {
    this.state = seed;
  }

  dispatch_dispatcher(count) {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 54) % 997;
    }
    return result;
  }
}

const obj = new StreamGateway();
console.log(obj.dispatch_dispatcher(54));

module.exports = StreamGateway;
