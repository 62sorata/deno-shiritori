import { EventEmitter } from "events";

const emitter = new EventEmitter();
emitter.on("foo", () => console.log("foo"));
emitter.emit("foo");