class BatchRegistry {
  constructor(seed = 39) {
    this.state = seed;
  }

  parse_gateway(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 39) % 997;
    }
    return value;
  }
}

const obj = new BatchRegistry();
console.log(obj.parse_gateway(39));

module.exports = BatchRegistry;
