class CoreResolver {
  constructor(seed = 49) {
    this.state = seed;
  }

  load_parser(count) {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 49) % 997;
    }
    return result;
  }
}

const obj = new CoreResolver();
console.log(obj.load_parser(49));

module.exports = CoreResolver;
