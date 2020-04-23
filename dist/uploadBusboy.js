// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"uploadBusboy.ts":[function(require,module,exports) {
"use strict";

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __spreadArrays = this && this.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Busboy = require("busboy");
/** Returns a function that recursively calls all functions in a array -with the same arguments- and combines results */


var createUnifiedFunction = function () {
  var fns = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    fns[_i] = arguments[_i];
  }

  return fns.reduce(function (prev, creator) {
    return function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      return Object.assign(prev.apply(void 0, args), creator.apply(void 0, args));
    };
  }, function () {
    return {};
  });
};
/** Merge two objects and cast to a more readable type definition (seen when hovering over things) */


var merge = function (y, x) {
  return Object.assign(y, x);
};

var _createStore = function (func, obj) {
  if (obj === void 0) {
    obj = {};
  }

  return function () {
    var _a;

    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    if (!args.length || !obj) return obj;
    var r = func.apply(void 0, args);
    obj = __assign(__assign({}, obj), (_a = {}, _a[args[0]] = __spreadArrays(obj[args[0]] || [], [r]), _a));
    return r;
  };
};

var _wrapStore = function (func, obj) {
  return Object.entries(obj).reduce(function (prev, _a) {
    var _b;

    var key = _a[0],
        value = _a[1];
    return Object.assign(prev, (_b = {}, _b[key] = func(value), _b));
  }, {});
};

var _files = function (fieldname, file, filename, encoding, mimetype) {
  return {
    fieldname: fieldname,
    file: file,
    filename: filename,
    encoding: encoding,
    mimetype: mimetype
  };
};

var _createFileWrites = function (_a) {
  var tmpdir = _a.tmpdir,
      tmpname = _a.tmpname;

  var fs = require('fs');

  var path = require('path');

  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    return {
      destination: new Promise(function (resolve, reject) {
        var destination = path.join(tmpdir.apply(void 0, args), tmpname.apply(void 0, args));
        var writeStream = fs.createWriteStream(destination);
        args[1].pipe(writeStream);
        args[1].on('end', function () {
          writeStream.end();
        });
        writeStream.on('finish', function () {
          return resolve(destination);
        });
        writeStream.on('error', reject);
      })
    };
  };
};

var _fileBuffers = function (_, file) {
  return {
    buffer: new Promise(function (resolve, reject) {
      var imgResponse = [];
      file.on('store', function (store) {
        imgResponse.push(store);
      });
      file.on('end', function () {
        resolve(Buffer.concat(imgResponse));
      });
      file.on('error', reject);
    })
  };
};
/** Turns field arguments in to a object with named keys */


var _fields = function (fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
  return {
    fieldname: fieldname,
    val: val,
    fieldnameTruncated: fieldnameTruncated,
    valTruncated: valTruncated,
    encoding: encoding,
    mimetype: mimetype
  };
};

function isFunctionObject(o) {
  return typeof o === 'object' && Object.values(o).findIndex(function (func) {
    return typeof func !== 'function';
  }) === -1;
}
/** `createUploadBusboy config property 'onFile|utils|onField' should be a object that only contains functions` */


var fnsOnlyErr = function (name) {
  return new Error("createUploadBusboy config property '" + name + "' should be a object that only contains functions");
};
/** Assigns all the default functions to the config object */


var mergeConfig = function (config) {
  if (config === void 0) {
    config = {};
  }

  if (!isFunctionObject(config.utils)) throw fnsOnlyErr('utils');
  if (!isFunctionObject(config.onFile)) throw fnsOnlyErr('onFile');
  if (!isFunctionObject(config.onField)) throw fnsOnlyErr('onField');
  var utils = merge({
    tmpname: function (_, __, filename) {
      return filename;
    },
    tmpdir: require('os').tmpdir
  }, config.utils || {});
  return {
    onField: merge({
      fields: _fields
    }, config.onField || {}),
    onFile: merge({
      fileWrites: _createFileWrites(utils),
      fileBuffers: _fileBuffers,
      files: _files
    }, config.onFile || {}),
    utils: utils,
    newBusboy: typeof config.newBusboy === 'function' ? config.newBusboy : _newBusboy,
    wrapStore: typeof config.wrapStore === 'function' ? config.wrapStore : _wrapStore,
    createStore: typeof config.createStore === 'function' ? config.createStore : _createStore
  };
};
/** creates a new instance of busboy class */


var _newBusboy = function (busboyConfig) {
  return new Busboy(busboyConfig);
};

var resolver = function (obj) {
  return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, _i, key, _c, _d;

    return __generator(this, function (_e) {
      switch (_e.label) {
        case 0:
          _a = [];

          for (_b in obj) _a.push(_b);

          _i = 0;
          _e.label = 1;

        case 1:
          if (!(_i < _a.length)) return [3
          /*break*/
          , 4];
          key = _a[_i];
          if (!(obj.hasOwnProperty(key) && typeof obj[key].then === 'function')) return [3
          /*break*/
          , 3];
          _c = obj;
          _d = key;
          return [4
          /*yield*/
          , obj[key]];

        case 2:
          _c[_d] = _e.sent();
          _e.label = 3;

        case 3:
          _i++;
          return [3
          /*break*/
          , 1];

        case 4:
          return [2
          /*return*/
          , obj];
      }
    });
  });
};
/** Generete the api facing a end-user of this utility. This is the interface of the program.
 *  The api/interface is actually just a function, but also has uttility functions attached to it; think "callable object" */


exports.createApi = function (request, config) {
  var utils = config.utils,
      newBusboy = config.newBusboy,
      onField = config.onField,
      onFile = config.onFile,
      createStore = config.createStore,
      wrapStore = config.wrapStore;
  /** the newBusboy function may be from config */

  var busboy = newBusboy({
    headers: request.headers
  });
  /** onFile is extendable through config */

  var onFileSubStores = wrapStore(createStore, onFile);
  /** onFile is a function that stores the combination of all substores */

  var handleOnFile = createStore(createUnifiedFunction.apply(void 0, Object.values(onFileSubStores)));
  /** fields have the same logic as files. Eventhough there is just one default function, additional ones could be configured */

  var onFieldSubStores = wrapStore(createStore, onField);
  var handleOnField = createStore(createUnifiedFunction.apply(void 0, Object.values(onFieldSubStores)));

  var start = function (cb) {
    return __awaiter(void 0, void 0, void 0, function () {
      var filePromises, handler, promise;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            filePromises = [];
            handler = typeof cb === 'function' ? function (done) {
              return filePromises.push(done.then(cb));
            } : function (done) {
              return filePromises.push(done);
            };
            promise = new Promise(function (resolve, reject) {
              busboy.on('finish', resolve);
              busboy.on('partsLimit', reject);
              busboy.on('filesLimit', reject);
              busboy.on('fieldsLimit', reject);
            });
            if (handleOnField()) busboy.on('field', handleOnField);
            if (handleOnFile()) busboy.on('file', function () {
              var args = [];

              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }

              handler(resolver(handleOnFile.apply(void 0, args)));
            });
            busboy.end(request.rawBody); // start busboy

            return [4
            /*yield*/
            , promise];

          case 1:
            _a.sent();

            return [2
            /*return*/
            , Promise.all(filePromises)];
        }
      });
    });
  };

  return Object.assign(start, __assign(__assign(__assign({}, onFileSubStores), onFieldSubStores), {
    busboy: busboy,
    onFile: handleOnFile,
    utils: utils,
    onField: handleOnField,
    start: start
  }));
};

exports.createUploadBusboy = function (request, config) {
  return exports.createApi(request, mergeConfig(config));
};

exports.default = exports.createUploadBusboy;
},{}]},{},["uploadBusboy.ts"], null)
//# sourceMappingURL=/uploadBusboy.js.map