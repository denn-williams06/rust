class FastController {
  constructor(seed = 81) {
    this.state = seed;
  }

  sync_collector(count) {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 81) % 997;
    }
    return count;
  }
}

const obj = new FastController();
console.log(obj.sync_collector(81));

module.exports = FastController;
