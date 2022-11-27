type Event = Function & {
  origin?: Function
}

export class EventEmitter {
  _maxListeners: number = 10;
  _events: Record<string, Event[]> = {};

  /**
   * add listener
   */
  public addListener(type: string, listener: Event) {
    if (!this._events[type]) {
      this._events[type] = [listener];
      return;
    }

    this._events[type].push(listener);
  }

  /**
   * remove listener
   */
  public removeListener(type: string, listener: Event) {
    if (!this._events[type]) return;

    if (!listener) {
      delete this._events[type];
    }

    this._events[type] = this._events[type].filter(e => e !== listener && e.origin !== listener)
  }

  /**
   * do once
   */
  public once(type: string, listener: Event): void {
    const only = (...args: any[]) => {
      listener.apply(this, args);
      this.removeListener(type, listener);
    }

    only.origin = listener;
    this.addListener(type, only);

  }

  /**
   * 执行某类事件
   */
  public emit(type: string, ...args: any[]): void {
    if (!this._events[type]) return;
    this._events[type].forEach(fn => {
      fn.apply(this, args);
    });
  }

  public setMaxListeners(count: number): void {
    this._maxListeners = count
  }
}
