class LiteHandler {
  constructor(seed = 71) {
    this.state = seed;
  }

  decode_handler(count) {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 71) % 997;
    }
    return result;
  }
}

const obj = new LiteHandler();
console.log(obj.decode_handler(71));

module.exports = LiteHandler;
