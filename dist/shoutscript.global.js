globalThis.require ||= _ => (console.warn("import error", _), _)
"use strict";
(() => {
  var __create2 = Object.create;
  var __defProp2 = Object.defineProperty;
  var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames2 = Object.getOwnPropertyNames;
  var __getProtoOf2 = Object.getPrototypeOf;
  var __hasOwnProp2 = Object.prototype.hasOwnProperty;
  var __commonJS2 = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps2 = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames2(from))
        if (!__hasOwnProp2.call(to, key) && key !== except)
          __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM2 = (mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // src/Gradule-web.js
  var require_Gradule_web2 = __commonJS2({
    "src/Gradule-web.js"(exports2, module2) {
      "use strict";
      var Preset = (() => {
        const presets = {
          kye_meh: ["#7350b3", "#2ebf91"],
          wiretap: ["#8A2387", "#E94057", "#F27121"],
          aquatic: ["#00C9FF", "#92FE9D"],
          martini: ["#FDFC47", "#24FE41"],
          amethyst: ["#9D50BB", "#6E48AA"],
          dance_to_forget: ["#FF4E50", "#F9D423"],
          instagram: ["#833ab4", "#fd1d1d", "#fcb045"],
          pastel: ["#74ebd5", "#74ecd5"],
          retro: [
            "#3f51b1",
            "#5a55ae",
            "#7b5fac",
            "#8f6aae",
            "#a86aa4",
            "#cc6b8e",
            "#f18271",
            "#f3a469",
            "#f7c978"
          ],
          cherryblossoms: ["#FBD3E9", "#BB377D"],
          candy: ["#D3959B", "#BFE6BA"],
          nelson: ["#f2709c", "#ff9472"],
          kyoto: ["#c21500", "#ffc500"],
          wedding_day_blues: ["#40E0D0", "#FF8C00", "#FF0080"]
        };
        class Preset2 {
          static $ = function() {
            let o = {};
            for (let preset2 in presets) {
              let p = presets[preset2];
              o[preset2] = new Preset2(p);
            }
            return o;
          }();
          constructor(colorArr) {
            this.colorArr = colorArr.map((color) => this.convertHexToRGB(color));
          }
          static beautify(string, colorArr, bold = false, italic = false) {
            const presetInstance = new Preset2(colorArr);
            return presetInstance.applyColors(string, bold, italic);
          }
          static beautifyE(string, colorArr, bold = false, italic = false) {
            const presetInstance = new Preset2(colorArr);
            return presetInstance.applyColorsEscaped(string, bold, italic);
          }
          convertHexToRGB(hexColor) {
            if (typeof hexColor === "string" && hexColor.startsWith("#")) {
              const color = hexColor.slice(1);
              return {
                r: parseInt(color.slice(0, 2), 16),
                g: parseInt(color.slice(2, 4), 16),
                b: parseInt(color.slice(4, 6), 16)
              };
            }
            return hexColor;
          }
          applyColors(string, bold = false, italic = false) {
            let { colorArr } = this;
            const length = string.length;
            const colorStopsCount = colorArr.length;
            const sectionLength = Math.floor(length / (colorStopsCount - 1));
            let finalStr = "";
            if (bold)
              finalStr += "\x1B[1m";
            if (italic)
              finalStr += "\x1B[3m";
            let index = 0;
            let { r, g, b } = colorArr[0];
            for (let i = 1; i < colorStopsCount; i++) {
              for (let j = 0; j < sectionLength && index < length; j++, index++) {
                finalStr += `\x1B[38;2;${r};${g};${b}m${string[index]}`;
                r += Math.round((colorArr[i].r - colorArr[i - 1].r) / sectionLength);
                g += Math.round((colorArr[i].g - colorArr[i - 1].g) / sectionLength);
                b += Math.round((colorArr[i].b - colorArr[i - 1].b) / sectionLength);
              }
            }
            finalStr += `\x1B[38;2;${r};${g};${b}m${string.substring(index)}`;
            if (italic)
              finalStr += "\x1B[23m";
            finalStr += "\x1B[0m";
            return finalStr;
          }
          applyColorsEscaped(string, bold = false, italic = false) {
            let { colorArr } = this;
            const length = string.length;
            const colorStopsCount = colorArr.length;
            const sectionLength = Math.floor(length / (colorStopsCount - 1));
            let finalStr = "";
            if (bold)
              finalStr += "\\x1B[1m";
            if (italic)
              finalStr += "\\x1B[3m";
            let index = 0;
            let { r, g, b } = colorArr[0];
            for (let i = 1; i < colorStopsCount; i++) {
              for (let j = 0; j < sectionLength && index < length; j++, index++) {
                finalStr += `\\x1B[38;2;${r};${g};${b}m${string[index]}`;
                r += Math.round((colorArr[i].r - colorArr[i - 1].r) / sectionLength);
                g += Math.round((colorArr[i].g - colorArr[i - 1].g) / sectionLength);
                b += Math.round((colorArr[i].b - colorArr[i - 1].b) / sectionLength);
              }
            }
            finalStr += `\\x1B[38;2;${r};${g};${b}m${string.substring(index)}`;
            if (italic)
              finalStr += "\\x1B[23m";
            finalStr += "\\x1B[0m";
            return finalStr;
          }
          print(string, bold = false, italic = false) {
            console.log(Preset2.beautify(string, this.colorArr, bold, italic));
          }
          printE(string, bold = false, italic = false) {
            console.log(Preset2.beautifyE(string, this.colorArr, bold, italic));
          }
          printStyled(string, styles, bold = false, italic = false) {
            console.log("%c" + Preset2.beautify(string, this.colorArr, bold, italic), styles);
          }
          static input(question, colorArr, bold = false, italic = false) {
            return new Promise((resolve) => {
              const beautifiedQuestion = Preset2.beautify(question, colorArr, bold, italic);
              const answer = prompt(beautifiedQuestion);
              resolve(answer);
            });
          }
        }
        return Object.assign(Preset2, presets);
      })();
      var print2 = (string, colorArr, bold = false, italic = false) => {
        new Preset(colorArr).print(string, bold, italic);
      };
      var printE = (string, colorArr, bold = false, italic = false) => {
        new Preset(colorArr).printE(string, bold, italic);
      };
      var printWithStyles2 = (string, colorArr, styles, bold = false, italic = false) => {
        new Preset(colorArr).printStyled(string, styles, bold, italic);
      };
      var input = Preset.input;
      var beautify = Preset.beautify;
      var _exp_ = { print: print2, printE, printWithStyles: printWithStyles2, input, beautify, preset: Preset };
      if (typeof module2 !== "undefined") {
        module2.exports = {
          ..._exp_,
          "default": _exp_
        };
      } else if (typeof window !== "undefined") {
        window.gradule = _exp_;
      }
    }
  });

  // src/wosscript.js
  var require_wosscript = __commonJS2({
    "src/wosscript.js"(exports, module) {
      "use strict";
      !globalThis?.module && Object.assign(globalThis, { module: { exports: {} } });
      var __create = Object.create;
      var __defProp = Object.defineProperty;
      var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames = Object.getOwnPropertyNames;
      var __getProtoOf = Object.getPrototypeOf;
      var __hasOwnProp = Object.prototype.hasOwnProperty;
      var __commonJS = (cb, mod) => function __require() {
        return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
      };
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
      var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
        // If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
        mod
      ));
      var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
      var require_Gradule_web = __commonJS({
        "src/Gradule-web.js"(exports2, module2) {
          "use strict";
          var Preset = (() => {
            const presets = {
              kye_meh: ["#7350b3", "#2ebf91"],
              wiretap: ["#8A2387", "#E94057", "#F27121"],
              aquatic: ["#00C9FF", "#92FE9D"],
              martini: ["#FDFC47", "#24FE41"],
              amethyst: ["#9D50BB", "#6E48AA"],
              dance_to_forget: ["#FF4E50", "#F9D423"],
              instagram: ["#833ab4", "#fd1d1d", "#fcb045"],
              pastel: ["#74ebd5", "#74ecd5"],
              retro: [
                "#3f51b1",
                "#5a55ae",
                "#7b5fac",
                "#8f6aae",
                "#a86aa4",
                "#cc6b8e",
                "#f18271",
                "#f3a469",
                "#f7c978"
              ],
              cherryblossoms: ["#FBD3E9", "#BB377D"],
              candy: ["#D3959B", "#BFE6BA"],
              nelson: ["#f2709c", "#ff9472"],
              kyoto: ["#c21500", "#ffc500"],
              wedding_day_blues: ["#40E0D0", "#FF8C00", "#FF0080"]
            };
            class Preset2 {
              static $ = function() {
                let o = {};
                for (let preset2 in presets) {
                  let p = presets[preset2];
                  o[preset2] = new Preset2(p);
                }
                return o;
              }();
              constructor(colorArr) {
                this.colorArr = colorArr.map((color) => this.convertHexToRGB(color));
              }
              static beautify(string, colorArr, bold = false, italic = false) {
                const presetInstance = new Preset2(colorArr);
                return presetInstance.applyColors(string, bold, italic);
              }
              static beautifyE(string, colorArr, bold = false, italic = false) {
                const presetInstance = new Preset2(colorArr);
                return presetInstance.applyColorsEscaped(string, bold, italic);
              }
              convertHexToRGB(hexColor) {
                if (typeof hexColor === "string" && hexColor.startsWith("#")) {
                  const color = hexColor.slice(1);
                  return {
                    r: parseInt(color.slice(0, 2), 16),
                    g: parseInt(color.slice(2, 4), 16),
                    b: parseInt(color.slice(4, 6), 16)
                  };
                }
                return hexColor;
              }
              applyColors(string, bold = false, italic = false) {
                let { colorArr } = this;
                const length = string.length;
                const colorStopsCount = colorArr.length;
                const sectionLength = Math.floor(length / (colorStopsCount - 1));
                let finalStr = "";
                if (bold)
                  finalStr += "\x1B[1m";
                if (italic)
                  finalStr += "\x1B[3m";
                let index = 0;
                let { r, g, b } = colorArr[0];
                for (let i = 1; i < colorStopsCount; i++) {
                  for (let j = 0; j < sectionLength && index < length; j++, index++) {
                    finalStr += `\x1B[38;2;${r};${g};${b}m${string[index]}`;
                    r += Math.round((colorArr[i].r - colorArr[i - 1].r) / sectionLength);
                    g += Math.round((colorArr[i].g - colorArr[i - 1].g) / sectionLength);
                    b += Math.round((colorArr[i].b - colorArr[i - 1].b) / sectionLength);
                  }
                }
                finalStr += `\x1B[38;2;${r};${g};${b}m${string.substring(index)}`;
                if (italic)
                  finalStr += "\x1B[23m";
                finalStr += "\x1B[0m";
                return finalStr;
              }
              applyColorsEscaped(string, bold = false, italic = false) {
                let { colorArr } = this;
                const length = string.length;
                const colorStopsCount = colorArr.length;
                const sectionLength = Math.floor(length / (colorStopsCount - 1));
                let finalStr = "";
                if (bold)
                  finalStr += "\\x1B[1m";
                if (italic)
                  finalStr += "\\x1B[3m";
                let index = 0;
                let { r, g, b } = colorArr[0];
                for (let i = 1; i < colorStopsCount; i++) {
                  for (let j = 0; j < sectionLength && index < length; j++, index++) {
                    finalStr += `\\x1B[38;2;${r};${g};${b}m${string[index]}`;
                    r += Math.round((colorArr[i].r - colorArr[i - 1].r) / sectionLength);
                    g += Math.round((colorArr[i].g - colorArr[i - 1].g) / sectionLength);
                    b += Math.round((colorArr[i].b - colorArr[i - 1].b) / sectionLength);
                  }
                }
                finalStr += `\\x1B[38;2;${r};${g};${b}m${string.substring(index)}`;
                if (italic)
                  finalStr += "\\x1B[23m";
                finalStr += "\\x1B[0m";
                return finalStr;
              }
              print(string, bold = false, italic = false) {
                console.log(Preset2.beautify(string, this.colorArr, bold, italic));
              }
              printE(string, bold = false, italic = false) {
                console.log(Preset2.beautifyE(string, this.colorArr, bold, italic));
              }
              printStyled(string, styles, bold = false, italic = false) {
                console.log("%c" + Preset2.beautify(string, this.colorArr, bold, italic), styles);
              }
              static input(question, colorArr, bold = false, italic = false) {
                return new Promise((resolve) => {
                  const beautifiedQuestion = Preset2.beautify(question, colorArr, bold, italic);
                  const answer = prompt(beautifiedQuestion);
                  resolve(answer);
                });
              }
            }
            return Object.assign(Preset2, presets);
          })();
          var print2 = (string, colorArr, bold = false, italic = false) => {
            new Preset(colorArr).print(string, bold, italic);
          };
          var printE = (string, colorArr, bold = false, italic = false) => {
            new Preset(colorArr).printE(string, bold, italic);
          };
          var printWithStyles2 = (string, colorArr, styles, bold = false, italic = false) => {
            new Preset(colorArr).printStyled(string, styles, bold, italic);
          };
          var input = Preset.input;
          var beautify2 = Preset.beautify;
          var _exp_ = { print: print2, printE, printWithStyles: printWithStyles2, input, beautify: beautify2, preset: Preset };
          if (typeof module2 !== "undefined") {
            module2.exports = _exp_;
          } else if (typeof window !== "undefined") {
            window.gradule = _exp_;
          }
        }
      });
      var WOSScript_exports = {};
      __export(WOSScript_exports, {
        default: () => WOSScript_default
      });
      module.exports = __toCommonJS(WOSScript_exports);
      var Gd = __toESM(require_Gradule_web());
      var WOSScript = class {
        opts = {
          platform: "web",
          type: "object"
        };
        constructor(opts2) {
          this.upd(opts2);
        }
        upd(opts2) {
          if (opts2)
            this.opts = { ...this.opts, ...opts2 };
        }
        parse(filestr, opts2) {
          this.upd(opts2);
          let mode = this.opts.type || "object";
          if (mode === "sync")
            mode = "function";
          let groups = this.abstract(filestr, mode);
          return groups;
        }
        abstract(filestr, type = "object") {
          let RGheader = /^\/\*\s*@WOS\s*([^*]+)\s*\*\//gi.exec(filestr);
          let head = "";
          if (RGheader) {
            let headerText = RGheader[1];
            let header = headerText.split("\n");
            head = header.join("\n");
          }
          let RGfooter = /\/\*\s*@WOS\s*([^*]+)\s*\*\/$/gi.exec(filestr);
          let foot = "";
          if (RGfooter) {
            let footerText = RGfooter[1];
            let footer = footerText.split("\n");
            foot = footer.join("\n");
          }
          let RGbody = filestr.replace((RGheader || [""])[0], "").replace((RGfooter || [""])[0], "").trim();
          let body = RGbody.replaceAll(";;", ",");
          let $th = this;
          function exporterSnip(doc) {
            if ($th.opts.platform) {
              switch ($th.opts.platform) {
                case "node":
                  return doc + `
module.exports = $wosglobe;`;
                  break;
                case "web":
                  return doc + `
window.$wosglobe = $wosglobe;`;
                  break;
                case "neut":
                  return doc + `
;(
  (
    (globalThis?.window) && (Object.assign(window.$wosglobe || (window.$wosglobe = {}), $wosglobe))
  )
    ||
  (
    (globalThis?.__dirname) && (Object.assign(globalThis.$wosglobe || (globalThis.$wosglobe = {}), $wosglobe))
  )
);`;
                  break;
              }
            }
            return doc;
          }
          function objectCase() {
            let doc = "";
            doc += head + (head ? `
` : "") + [
              `/*@!!`,
              `  THIS IS A WOSSCRIPT`,
              "  PLEASE REFER TO DOCUMENTATION WHEN VIEWING COMPILED WOSSCRIPTS",
              `*/`,
              ``,
              `const $wosglobe = {`,
              body.split("\n").map((a) => "  " + a).join("\n"),
              `}`,
              ``
            ].join("\n") + (foot ? `
` : "") + foot;
            doc = exporterSnip(doc);
            return doc;
          }
          function classCase() {
            let doc = "";
            doc += head + (head ? `
` : "") + [
              `/*@!!`,
              `  THIS IS A WOSSCRIPT`,
              "  PLEASE REFER TO DOCUMENTATION WHEN VIEWING COMPILED WOSSCRIPTS",
              ``,
              "    - This document was built in Class Mode",
              `*/`,
              ``,
              `const $wosglobe = class {`,
              body.split("\n").map((a) => "  " + a).join("\n"),
              `}`,
              ``
            ].join("\n") + (foot ? `
` : "") + foot;
            doc = exporterSnip(doc);
            return doc;
          }
          function asyncFunctionCase() {
            let doc = "";
            doc += head + (head ? `
` : "") + [
              `/*@!!`,
              `  THIS IS A WOSSCRIPT`,
              "  PLEASE REFER TO DOCUMENTATION WHEN VIEWING COMPILED WOSSCRIPTS",
              ``,
              "    - This document was built in Async Mode",
              `*/`,
              ``,
              `const $wosglobe = async function() {`,
              body.split("\n").map((a) => "  " + a).join("\n"),
              `}`,
              ``
            ].join("\n") + (foot ? `
` : "") + foot;
            doc = exporterSnip(doc);
            return doc;
          }
          function syncFunctionCase() {
            let doc = "";
            doc += head + (head ? `
` : "") + [
              `/*@!!`,
              `  THIS IS A WOSSCRIPT`,
              "  PLEASE REFER TO DOCUMENTATION WHEN VIEWING COMPILED WOSSCRIPTS",
              ``,
              "    - This document was built in Sync Mode",
              `*/`,
              ``,
              `const $wosglobe = function() {`,
              body.split("\n").map((a) => "  " + a).join("\n"),
              `}`,
              ``
            ].join("\n") + (foot ? `
` : "") + foot;
            doc = exporterSnip(doc);
            return doc;
          }
          let b = "";
          switch (type) {
            case "object":
              return b += objectCase();
              break;
            case "class":
              return b += classCase();
              break;
            case "async":
              return b += asyncFunctionCase();
              break;
            case "function":
              return b += syncFunctionCase();
              break;
            default:
              return b += objectCase();
              break;
          }
          return b;
        }
        exec(code, opts) {
          let parsedCode = this.parse(code, opts);
          try {
            var evalResp = eval(parsedCode);
          } catch (e) {
            console.error(
              Gd.beautify(
                "Failed to run WOSScript:",
                [...Gd.preset.cherryblossoms, ...Gd.preset.amethyst].sort(() => Math.random() - 0.5),
                true
              ),
              "\n\n",
              e,
              "\n",
              parsedCode,
              "\n\n"
            );
            return e;
          }
          return evalResp;
        }
      };
      globalThis?.window && Object.assign(window, { WOSScript }) || module && (module.exports = { WOSScript });
      var WOSScript_default = WOSScript;
    }
  });

  // node_modules/path/index.js
  var require_path = __commonJS2({
    "node_modules/path/index.js"(exports2) {
      "use strict";
      exports2.basename = function(path) {
        return path.split("/").pop();
      };
      exports2.dirname = function(path) {
        return path.split("/").slice(0, -1).join("/") || ".";
      };
      exports2.extname = function(path) {
        var base = exports2.basename(path);
        if (!~base.indexOf("."))
          return "";
        var ext = base.split(".").pop();
        return "." + ext;
      };
    }
  });

  // typed/fs-web/dist/cjs/directory_entry.js
  var require_directory_entry = __commonJS2({
    "typed/fs-web/dist/cjs/directory_entry.js"(exports2, module2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var _path = require_path();
      var _path2 = _interopRequireDefault(_path);
      function DirectoryEntry(fullPath, type) {
        this.path = fullPath;
        this.name = _path2["default"].basename(fullPath);
        this.dir = _path2["default"].dirname(fullPath);
        this.type = type;
      }
      exports2["default"] = DirectoryEntry;
      module2.exports = exports2["default"];
    }
  });

  // typed/fs-web/dist/cjs/core.js
  var require_core = __commonJS2({
    "typed/fs-web/dist/cjs/core.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.readFile = readFile;
      exports2.readString = readString;
      exports2.writeFile = writeFile;
      exports2.removeFile = removeFile;
      exports2.readdir = readdir;
      exports2.mkdir = mkdir;
      exports2.rmdir = rmdir;
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var _path = require_path();
      var _path2 = _interopRequireDefault(_path);
      var _directory_entry = require_directory_entry();
      var _directory_entry2 = _interopRequireDefault(_directory_entry);
      function ab2str(buf) {
        return String.fromCharCode.apply(null, new Uint16Array(buf));
      }
      function str2ab(str) {
        var buf = new ArrayBuffer(str.length * 2);
        var bufView = new Uint16Array(buf);
        for (var i = 0, strLen = str.length; i < strLen; i++) {
          bufView[i] = str.charCodeAt(i);
        }
        return buf;
      }
      var DB_NAME = window.location.host + "_filesystem";
      var OS_NAME = "files";
      var DIR_IDX = "dir";
      function init(callback) {
        var req = window.indexedDB.open(DB_NAME, 1);
        req.onupgradeneeded = function(e) {
          var db = e.target.result;
          var objectStore = db.createObjectStore(OS_NAME, { keyPath: "path" });
          objectStore.createIndex(DIR_IDX, "dir", { unique: false });
        };
        req.onsuccess = function(e) {
          callback(e.target.result);
        };
      }
      function initOS(type, callback) {
        init(function(db) {
          var trans = db.transaction([OS_NAME], type), os = trans.objectStore(OS_NAME);
          callback(os);
        });
      }
      var readFrom = function readFrom2(fileName) {
        return new Promise(function(resolve, reject) {
          initOS("readonly", function(os) {
            var req = os.get(fileName);
            req.onerror = reject;
            req.onsuccess = function(e) {
              var res = e.target.result;
              if (res && res.data) {
                resolve(res.data);
              } else {
                reject("File not found");
              }
            };
          });
        });
      };
      function readFile(fileName) {
        return readFrom(fileName).then(function(data) {
          if (!(data instanceof ArrayBuffer)) {
            data = str2ab(data.toString());
          }
          return data;
        });
      }
      function readString(fileName) {
        return readFrom(fileName).then(function(data) {
          if (data instanceof ArrayBuffer) {
            data = ab2str(data);
          }
          return data;
        });
      }
      function writeFile(fileName, data) {
        return new Promise(function(resolve, reject) {
          initOS("readwrite", function(os) {
            var req = os.put({
              "path": fileName,
              "dir": _path2["default"].dirname(fileName),
              "type": "file",
              "data": data
            });
            req.onerror = reject;
            req.onsuccess = function(e) {
              resolve();
            };
          });
        });
      }
      function removeFile(fileName) {
        return new Promise(function(resolve) {
          initOS("readwrite", function(os) {
            var req = os["delete"](fileName);
            req.onerror = req.onsuccess = function(e) {
              resolve();
            };
          });
        });
      }
      function withTrailingSlash(path) {
        var directoryWithTrailingSlash = path[path.length - 1] === "/" ? path : path + "/";
        return directoryWithTrailingSlash;
      }
      function readdir(directoryName) {
        return new Promise(function(resolve, reject) {
          initOS("readonly", function(os) {
            var dir = _path2["default"].dirname(withTrailingSlash(directoryName));
            var idx = os.index(DIR_IDX);
            var range = IDBKeyRange.only(dir);
            var req = idx.openCursor(range);
            req.onerror = function(e) {
              reject(e);
            };
            var results = [];
            req.onsuccess = function(e) {
              var cursor = e.target.result;
              if (cursor) {
                var value = cursor.value;
                var entry = new _directory_entry2["default"](value.path, value.type);
                results.push(entry);
                cursor["continue"]();
              } else {
                resolve(results);
              }
            };
          });
        });
      }
      function mkdir(fullPath) {
        return new Promise(function(resolve, reject) {
          initOS("readwrite", function(os) {
            var dir = withTrailingSlash(_path2["default"]);
            var req = os.put({
              "path": fullPath,
              "dir": _path2["default"].dirname(dir),
              "type": "directory"
            });
            req.onerror = reject;
            req.onsuccess = function(e) {
              resolve();
            };
          });
        });
      }
      function rmdir(fullPath) {
        return readdir(fullPath).then(function removeFiles(files) {
          if (!files || !files.length) {
            return removeFile(fullPath);
          }
          var file = files.shift(), func = file.type === "directory" ? rmdir : removeFile;
          return func(file.name).then(function() {
            return removeFiles(files);
          });
        });
      }
    }
  });

  // typed/fs-web/dist/cjs/fs.js
  var require_fs = __commonJS2({
    "typed/fs-web/dist/cjs/fs.js"(exports2) {
      "use strict";
      Object.defineProperty(exports2, "__esModule", { value: true });
      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};
          if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key))
                newObj[key] = obj[key];
            }
          }
          newObj["default"] = obj;
          return newObj;
        }
      }
      function _defaults(obj, defaults) {
        var keys = Object.getOwnPropertyNames(defaults);
        for (var i = 0; i < keys.length; i++) {
          var key = keys[i];
          var value = Object.getOwnPropertyDescriptor(defaults, key);
          if (value && value.configurable && obj[key] === void 0) {
            Object.defineProperty(obj, key, value);
          }
        }
        return obj;
      }
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { "default": obj };
      }
      var _core = require_core();
      var _directory_entry = require_directory_entry();
      var _directory_entry2 = _interopRequireDefault(_directory_entry);
      _directory_entry2["default"].prototype.readFile = function(callback) {
        if (this.type !== "file") {
          throw new TypeError("Not a file.");
        }
        return (0, _core.readFile)(this.path, callback);
      };
      _defaults(exports2, _interopRequireWildcard(_core));
      exports2.DirectoryEntry = _directory_entry2["default"];
    }
  });

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

  // src/shoutscript.js
  var g_2 = __toESM2(require_Gradule_web2());

  // src/ssvm.js
  var import_Gradule_web = __toESM2(require_Gradule_web2());
  var import_wosscript = __toESM2(require_wosscript());

  // src/shoutscript.js
  var import_fs_web = __toESM2(require_fs());
  var _qp = (color) => function(string, styles, bold = false, italic = false) {
    return g_2.printWithStyles(string, color, styles, bold, italic);
  };
  var _static = {
    pws: g_2.printWithStyles,
    main_color: _qp(
      [...g_2.preset.amethyst, ...g_2.preset.cherryblossoms].sort(() => Math.random() - 0.5)
    ),
    error_color: _qp(
      [...g_2.preset.kyoto, ...g_2.preset.wiretap].sort(() => Math.random() - 0.5)
    ),
    INTRO() {
      _static.main_color(
        "Welcome to Shoutscript v0.01!",
        `
        font-size: 13px;
        `,
        true
      );
    },
    bench: {
      INTRO() {
        _static.main_color(
          "Welcome to Shoutscript Benchmark!",
          `
          font-size: 13px;
          `,
          true
        );
      },
      BENCHMARK() {
        _static.main_color(
          "Benchmarking...",
          `
          font-size: 13px
          `
        );
      },
      BENCH_START() {
        _static.main_color(
          "Bench Started!",
          `
          font-size: 13px;
          `,
          true
        );
      }
    }
  };
  var _register = (name) => {
    return {
      [name]: class {
        name = name;
        type = name;
        constructor(...args) {
          this.args = args;
        }
        setType(type) {
          this.type = type;
        }
        setArgs(...args) {
          this.args = args;
        }
      }
    }[name];
  };
  var _type = (val) => Array.isArray(val) ? "array" : (val?.constructor?.name + "").toLowerCase() || typeof val;
  var shouts = {
    _modes: {
      benchmark: {
        introDone: false,
        benching: false,
        benchVal: 0,
        startBenching() {
          shouts.benching = true;
          shouts.benchVal = 0;
        }
      },
      shoutfuck: {
        // Shoutfuck - BrainFuck Interpreter with Shouts
        // < =: $bl | $bp(value)
        // > =: $br
        // + =: $bp | $bp(value)
        // - =: $bm
        // . =: $bv
        // , =: $bs
        // [ =: $b_op
        // ] =: $b_cl
        // We will provide extras like: 
        // $binp(input) - Input Value into the current register
        // $bget(reg) - Get the value of that register
        // $bset(reg, value) - Set the value of that register
        // $bstoreFN(reg, fn) - implicity store a function into a register, this will not work if the register is not a function
        // $bcallFN(reg) - Call a function with the value of the register
        // $bpop(reg) - Pop the value of the register
        // $bpush(reg) - Push the value of the register
        pointer: 0,
        stack: [],
        input: [],
        output: [],
        Register: class Reg {
          static registers = /* @__PURE__ */ new Map();
          static createRegisters() {
            for (let i = 0; i < 255; i++) {
              shouts._modes.shoutfuck.stack.push(new Reg(i));
            }
          }
          static _ = addEventListener("DOMContentLoaded", () => {
            shouts._modes.shoutfuck.Register.createRegisters();
          });
          constructor(name, ...args) {
            this.name = name;
            if (args.length > 1) {
              this.value = [...args];
              this.type = "sfArray";
            } else {
              this.value = args[0];
              this.type = "sfValue";
            }
            args.find((arg) => {
              if (_type(arg) === new (_register("type"))()) {
                this.type = arg.type;
              }
            });
            shouts._modes.shoutfuck.Register.registers.set(this.name, this);
          }
        }
      }
    },
    benchStart() {
      if (!shouts._modes.benchmark.introDone) {
        _static.bench.INTRO();
        shouts._modes.benchmark.introDone = true;
      }
      if (!shouts._modes.benchmark.benching) {
        shouts._modes.benchmark.startBenching();
        _static.main_color(
          "Bench Started!",
          `
          font-size: 13px;
          `,
          true
        );
        let startTime = Date.now();
        shouts._modes.benchmark.benching = true;
        shouts._modes.benchmark.benchVal = startTime;
      } else {
        _static.main_color(
          "Bench Already Started!",
          `
          font-size: 13px;
          font-style: italic;
          text-decoration: underline;
          `,
          true
        );
      }
      return shouts._modes.benchmark.benchVal;
    },
    benchEnd() {
      if (shouts._modes.benchmark.benching) {
        let endTime = Date.now();
        let startTime = shouts._modes.benchmark.benchVal;
        shouts._modes.benchmark.benchVal = endTime - startTime;
        shouts._modes.benchmark.benching = false;
        _static.main_color(
          `Time: ${shouts._modes.benchmark.benchVal}ms
Start: ${startTime}
End: ${endTime}`,
          `
          font-size: 13px;
          `,
          true
        );
      } else {
        _static.main_color(
          "Bench Not Active!",
          `
          font-size: 13px;
          font-style: italic;
          text-decoration: underline;
          `,
          true
        );
      }
      return shouts._modes.benchmark.benchVal;
    },
    // Shoutfuck - BrainFuck Interpreter with Shouts
    // < =: $bl | $bj(value)
    // > =: $br | $bj(value)
    // + =: $bp | $ba(value)
    // - =: $bm | $ba(value)
    // . =: $bv
    // [ =: $b_op
    // ] =: $b_cl
    // We will provide extras like: 
    // $binp(input) - Input Value into the current register
    // $bget(reg) - Get the value of that register
    // $bset(reg, value) - Set the value of that register
    // $bstoreFN(reg, fn) - implicity store a function into a register, this will not work if the register is not a function
    // $bcallFN(reg) - Call a function with the value of the register
    // $bpop(reg) - Pop the value of the register
    // $bpush(reg) - Push the value of the register
    $v() {
      return shouts._modes.shoutfuck.stack[shouts._modes.shoutfuck.pointer];
    },
    $bj() {
      return function(val = 0) {
        return shouts._modes.shoutfuck.pointer = (shouts._modes.shoutfuck.pointer + val) % shouts._modes.shoutfuck.stack.length;
      };
    },
    $bl() {
      return shouts.$bj()(-1);
    },
    $br() {
      return shouts.$bj()(1);
    },
    $bp() {
      let curReg = shouts.$v();
      if (curReg instanceof shouts._modes.shoutfuck.Register) {
        if (_type(curReg.value) == "number") {
          return curReg.value++;
        } else if (_type(curReg.value) == "string") {
          return curReg.value += "+";
        } else {
          throw _static.error_color(
            `Invalid Type: ${_type(curReg.value)}
Expected: Number or String
Received: ${_type(curReg.value)}`,
            `
              font-size: 13px
              `,
            true
          );
        }
      }
    },
    $bm() {
      let curReg = shouts._modes.$v();
      if (curReg instanceof shouts._modes.shoutfuck.Register) {
        if (_type(curReg.value) == "number") {
          return curReg.value--;
        } else if (_type(curReg.value) == "string") {
          return curReg.value = curReg.value.slice(0, -1);
        } else {
          throw _static.error_color(
            `Invalid Type: ${_type(curReg.value)}
Expected: Number or String
Received: ${_type(curReg.value)}`,
            `
              font-size: 13px
            `,
            true
          );
        }
      }
    },
    $ba() {
      return function(val = 0) {
        if (val >= 0) {
          for (let i = 0; i < val; i++) {
            return shouts._modes.$bp();
          }
        } else {
          for (let i = -val; i > 0; i--) {
            return shouts._modes.$bm();
          }
        }
      };
    },
    // ---
    $repeat(shoutName, times = 1) {
      return function() {
        for (let i = 0; i < times; i++) {
          if (typeof window[shoutName] === "function") {
            window[shoutName]();
          }
        }
      };
    },
    $timeShout(shoutName) {
      return function() {
        console.time(`Execution time for ${shoutName}`);
        if (typeof window[shoutName] === "function") {
          window[shoutName]();
        }
        console.timeEnd(`Execution time for ${shoutName}`);
      };
    },
    $keyTrigger(shoutName, keyCode) {
      return function() {
        window.addEventListener("keydown", (event) => {
          if (event.code === keyCode) {
            if (typeof window[shoutName] === "function") {
              window[shoutName]();
            }
          }
        });
      };
    },
    $conditionalShout(shoutName, conditionFn) {
      return function() {
        if (conditionFn()) {
          if (typeof window[shoutName] === "function") {
            return window[shoutName]();
          }
        }
      };
    },
    $chain(...shoutNames) {
      return function() {
        shoutNames.forEach((shoutName) => {
          if (typeof window[shoutName] === "function") {
            window[shoutName]();
          }
        });
      };
    },
    $delayedShout(shoutName, delay) {
      setTimeout(() => {
        if (typeof window[shoutName] === "function") {
          return window[shoutName]();
        }
      }, delay);
    },
    $intervalShout(shoutName, interval) {
      setInterval(() => {
        if (typeof window[shoutName] === "function") {
          window[shoutName]();
        }
      }, interval);
    },
    $randomShout(...shoutNames) {
      const randomIndex = Math.floor(Math.random() * shoutNames.length);
      const randomShout = shoutNames[randomIndex];
      if (typeof window[randomShout] === "function") {
        return window[randomShout]();
      }
    },
    _shoutLog: [],
    $logShout(shoutName, ...params) {
      shouts._shoutLog.push({
        shoutName,
        invokedAt: /* @__PURE__ */ new Date(),
        params
      });
      if (typeof window[shoutName] === "function") {
        return window[shoutName](...params);
      }
    },
    // Shout grouping and tagging
    _shoutGroups: {},
    $tagShout(shoutName, tag) {
      if (!shouts._shoutGroups[tag]) {
        shouts._shoutGroups[tag] = [];
      }
      return shouts._shoutGroups[tag].push(shoutName);
    },
    $invokeTaggedShouts(tag) {
      if (shouts._shoutGroups[tag]) {
        shouts._shoutGroups[tag].forEach((shoutName) => {
          if (typeof window[shoutName] === "function") {
            window[shoutName]();
          }
        });
      }
    },
    // Dependency injection for shouts
    _shoutDependencies: {},
    $injectDependency(shoutName, dependencyName, dependency) {
      if (!shouts._shoutDependencies[shoutName]) {
        shouts._shoutDependencies[shoutName] = {};
      }
      return shouts._shoutDependencies[shoutName][dependencyName] = dependency;
    },
    $invokeWithDependencies(shoutName) {
      const dependencies = shouts._shoutDependencies[shoutName] || {};
      if (typeof window[shoutName] === "function") {
        return window[shoutName](dependencies);
      }
    }
  };
  var compiled = Object.entries(shouts).map(([key, val]) => {
    if (!key.startsWith("_")) {
      shoutp_default.createShout(key, val);
    }
  });
  _static.INTRO();
})();
