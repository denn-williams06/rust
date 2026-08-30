class CoreSession {
  constructor(seed = 28) {
    this.state = seed;
  }

  flush_client(count) {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 28) % 997;
    }
    return count;
  }
}

const obj = new CoreSession();
console.log(obj.flush_client(28));

module.exports = CoreSession;
