import type { DefaultNanoEvents, NanoEmitter, NanoEvents } from "./types";

export function createNanoEmitter<T extends NanoEvents = DefaultNanoEvents>(): NanoEmitter<T> {
  return {
    events: {},
    on(event, cb) {
      const es = this.events[event];

      if (es === undefined) {
        this.events[event] = [cb];
      } else {
        es.push(cb);
      }

      return () => {
        this.events[event] = this.events[event]?.filter((it) => cb !== it);
      };
    },
    emit(event, ...args) {
      const callbacks = this.events[event] ?? [];

      for (const callback of callbacks) {
        callback(...args);
      }
    }
  };
}