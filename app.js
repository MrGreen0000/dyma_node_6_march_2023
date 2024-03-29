class MyEmitter {
  constructor() {
    this.events = {};
  }
  on(event, listener) {
    this.events[event] = this.events[event] || [];
    this.events[event].push(listener);
  }
  emit(event) {
    if (this.events[event]) {
      this.events[event].forEach((listener) => listener());
    }
  }
}

// const MyEmitter = require("events");
const emitter = new MyEmitter();

emitter.on("FILE_READ", (filename) => {
  console.log("file was read:", filename);
});

emitter.on("FILE_READ", () => {
  console.log("should cache file");
});

emitter.emit("FILE_READ", "filename");
