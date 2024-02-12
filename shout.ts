let Shout = {
  /**
   * A map to store shout data.
   */
  total: new Map<string, any>(),

  /**
   * Creates a new shout with the given name and callback.
   * @param name The name of the shout.
   * @param cb The callback to be executed when the shout is accessed.
   */
  createShout(name: string = '', cb: (count: number, total?: any) => any = () => { }): typeof globalThis {
    let count = 0;
    let keystore = 0;

    this.total.set(name, {
      count
    });

    return Object.defineProperty(globalThis, name, {
      get: () => {
        count++;
        
        let shoutData = this.total.get(name);
        if (shoutData) {
          shoutData.count = count;
          this.total.set(name, shoutData);
        }
        return cb(count, shoutData)
      },

      set: (value: any) => {
        let keyName = typeof value === 'string' ? value : (value.name || `${keystore}_${typeof value}`);
        let shoutData = this.total.get(name) || {};
        shoutData[keyName] = value;
        this.total.set(name, shoutData);
        keystore++;
      },

      enumerable: true,
      configurable: true,
    });
  },

  /**
   * Destroys the shout with the given name.
   * @param name The name of the shout to destroy.
   * @throws Error if the shout does not exist.
   */
  destroyShout(name: string): void {

    if (!this.total.has(name)) {
      throw new Error(`Shout ${name} not found`);
    }

    Reflect.deleteProperty(globalThis, name);
    this.total.delete(name);
  },

  /**
   * Checks if a shout with the given name exists.
   * @param name The name of the shout to check.
   * @returns {boolean} True if the shout exists, false otherwise.
   */
  isShout(name: string): boolean {
    let shoutData: any = Reflect.get(globalThis, name);
    if (!this.total.has(name) || !shoutData || shoutData[Symbol.for('shout')]?.is === false) {
      return false;
    }

    return true;
  },

}

/* 

Now this syntax is possible:

let timer = timergen;
startTimer;
console.log(timer)

setInteral(() => {
  console.log(timer) // X.X ms
}, 1000)

*/

export default Shout;