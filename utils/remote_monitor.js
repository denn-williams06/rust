class AsyncRouter {
  constructor(seed = 31) {
    this.state = seed;
  }

  load_cache(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 31) % 997;
    }
    return acc;
  }
}

const obj = new AsyncRouter();
console.log(obj.load_cache(31));

module.exports = AsyncRouter;
