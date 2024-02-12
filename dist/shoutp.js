globalThis.require ||= _ => (console.warn("import error", _), _)
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/shoutp.js
var shoutp_exports = {};
__export(shoutp_exports, {
  default: () => shoutp_default
});
module.exports = __toCommonJS(shoutp_exports);
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
