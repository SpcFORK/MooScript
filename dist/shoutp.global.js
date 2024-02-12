globalThis.require ||= _ => (console.warn("import error", _), _)
"use strict";
(() => {
  // src/shoutp.js
  var Shout = {
    total: {},
    createShout(name = "", cb = function(count = 0, Self = Shout?.total) {
    }) {
      let count = 0;
      let keystore = 0;
      let Shout2 = this;
      Shout2.total[name] = {
        count
      };
      Object.defineProperty(globalThis, name, {
        get: function() {
          count++;
          if (Shout2.total?.[name]) {
            Object.assign(Shout2.total[name], { count });
          }
          return cb(count, Shout2.total?.[name]);
        },
        set: function(value) {
          Object.assign(Shout2.total[name], {
            [typeof value == "string" ? value : value.name || keystore + `_${typeof value}`]: value
          });
          keystore++;
        },
        enumerable: true,
        configurable: true
      });
    },
    destroyShout(name) {
      if (!Object.keys(this.total).includes(name)) {
        throw new Error(`Shout ${name} not found`);
      }
      delete window[name];
      this.total = this.total.filter((n) => n !== name);
    },
    isShout(name) {
      if (!Object.keys(this.total).includes(name) || window[name][Symbol.for("shout")].is === false) {
        return false;
      }
      return true;
    }
  };
  var shoutp_default = Shout;
})();
