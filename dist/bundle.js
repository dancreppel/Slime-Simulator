/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/creature.js":
/*!*************************!*\
  !*** ./src/creature.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Creature; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/entity.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Creature = /*#__PURE__*/function (_Entity) {
  _inherits(Creature, _Entity);

  var _super = _createSuper(Creature);

  function Creature(options) {
    _classCallCheck(this, Creature);

    return _super.call(this, options); // this.pos
    // this.dim
    // this.image
    // this.hitboxCenter
    // this.hitboxRadius
  }

  return Creature;
}(_entity__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/entity.js":
/*!***********************!*\
  !*** ./src/entity.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Entity; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Entity = /*#__PURE__*/function () {
  function Entity(options) {
    _classCallCheck(this, Entity);

    // pos is an array with x and y coordinates [x, y]
    this.pos = options.pos; // dim is an array with width and height [width, height]

    this.dim = options.dim;
    this.image = new Image();
    this.image.src = options.src; // Instantiate hitbox

    this.hitboxCenter = this.hitboxCenter();
    this.hitboxRadius = this.hitboxRadius();
  }

  _createClass(Entity, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.drawImage(this.image, this.pos[0], this.pos[1], this.dim[0], this.dim[1]); // ! for testing
      // this.drawHitbox();
    }
  }, {
    key: "move",
    value: function move(dx, dy) {
      this.pos[0] += dx;
      this.pos[1] += dy;
      this.hitboxCenter[0] += dx;
      this.hitboxCenter[1] += dy;
    }
  }, {
    key: "hitboxCenter",
    value: function hitboxCenter() {
      var _this = this;

      var hitboxCenter = this.pos.map(function (_, i) {
        return _this.pos[i] + _this.dim[i] / 2;
      });
      return hitboxCenter;
    }
  }, {
    key: "hitboxRadius",
    value: function hitboxRadius() {
      return this.dim[0] < this.dim[1] ? this.dim[0] / 2 : this.dim[1] / 2;
    } // ! for testing
    // drawHitbox() {
    //   const canvas = document.getElementById("canvas");
    //   const ctx = canvas.getContext("2d");
    //   ctx.beginPath();
    //   ctx.arc(
    //     this.hitboxCenter[0],
    //     this.hitboxCenter[1],
    //     this.hitboxRadius,
    //     0,
    //     2 * Math.PI,
    //     false
    //   );
    //   ctx.stroke();
    //   return true;
    // }

  }, {
    key: "isCollision",
    value: function isCollision(entity) {
      var dx = this.hitboxCenter[0] - entity.hitboxCenter[0];
      var dy = this.hitboxCenter[1] - entity.hitboxCenter[1];
      var distance = Math.sqrt(dx * dx + dy * dy);
      var minDistance = this.hitboxRadius + entity.hitboxRadius;
      if (distance < minDistance) return true;else return false;
    }
  }]);

  return Entity;
}();



/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/entity.js");
/* harmony import */ var _creature__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./creature */ "./src/creature.js");
/* harmony import */ var _slime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slime */ "./src/slime.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map */ "./src/map.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./src/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Game = /*#__PURE__*/function () {
  function Game(options) {
    _classCallCheck(this, Game);

    this.DIM_X = options.DIM_X;
    this.DIM_Y = options.DIM_Y;
    this.ctx = options.ctx;
    this.entities = [];
    this.creatures = [];
    this.moveDirX = 0;
    this.moveDirY = 0;
  }

  _createClass(Game, [{
    key: "createPlayer",
    value: function createPlayer() {
      // center pos in the middle of the canvas object
      var pos = [this.DIM_X / 2, this.DIM_Y / 2];
      this.player = new _slime__WEBPACK_IMPORTED_MODULE_2__["default"]({
        pos: pos,
        dim: [30, 30],
        src: "assets/sprites/slime.png"
      }); // this.entities.push(this.player);
      // this.creatures.push(this.player);
    }
  }, {
    key: "generateMap",
    value: function generateMap() {
      this.sandBox = new _map__WEBPACK_IMPORTED_MODULE_3__["default"]({
        player: this.player,
        height: 6000,
        wall: "assets/sprites/rock.png",
        floor: "assets/sprites/grass.png",
        outside: "assets/sprites/dirt.jpg"
      });
    }
  }, {
    key: "generateEntities",
    value: function generateEntities() {
      // add inanimate objects like trees to entities array
      this.entities = this.entities.concat(this.sandBox.inanimateEntities);
    }
  }, {
    key: "generateEnemies",
    value: function generateEnemies() {
      var _this = this;

      var creatures = {
        mouse: {
          dim: 20,
          src: 'assets/sprites/mouse.png'
        }
      };
      var entities = this.entities.concat(this.player);
      var numType = 20;

      for (var type in creatures) {
        var dim = creatures[type].dim;
        var src = creatures[type].src;
        var xRange = this.sandBox.rightBound - this.sandBox.leftBound - dim;
        var yRange = this.sandBox.bottomBound - this.sandBox.topBound - dim;
        var i = 1;

        var _loop = function _loop() {
          var xOffset = _this.sandBox.leftBound;
          var yOffset = _this.sandBox.topBound;
          var randPos = _util__WEBPACK_IMPORTED_MODULE_4__["randPos"](xRange, yRange, xOffset, yOffset);
          var newCreature = new _creature__WEBPACK_IMPORTED_MODULE_1__["default"]({
            pos: randPos,
            dim: [dim, dim],
            src: src
          });
          var invalidPos = entities.some(function (entity) {
            return newCreature.isCollision(entity);
          }); // only push new creature to creatures array if it is in a valid pos

          if (!invalidPos) {
            _this.creatures.push(newCreature);

            i++;
          }
        };

        while (i < numType) {
          _loop();
        }
      }
    }
  }, {
    key: "render",
    value: function render(ctx) {
      ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
      this.sandBox.draw(ctx);
      this.entities.forEach(function (entity) {
        return entity.draw(ctx);
      });
      this.creatures.forEach(function (creature) {
        return creature.draw(ctx);
      });
      this.player.draw(ctx);
    }
  }, {
    key: "start",
    value: function start() {
      var _this2 = this;

      this.setKeyBinds();
      this.createPlayer();
      this.generateMap();
      this.generateEntities();
      this.generateEnemies(); // refresh 60 times per second

      setInterval(function () {
        _this2.render(_this2.ctx); // regular move


        _this2.move(false); // if a collision occurs, reverse move


        if (_this2.checkCollision() || _this2.sandBox.outOfBounds(_this2.player)) {
          _this2.move(true);
        }

        _this2.player.eat(_this2.creatures);

        if (_this2.player.dead) console.log('game over');
      }, 17);
    }
  }, {
    key: "setKeyBinds",
    value: function setKeyBinds() {
      var _this3 = this;

      // handle keydownfor arrow keys
      document.addEventListener('keydown', function (e) {
        e.preventDefault();
        var speed = 10;

        switch (e.key) {
          case 'ArrowUp':
            _this3.moveDirY = speed;
            break;

          case 'ArrowDown':
            _this3.moveDirY = -speed;
            break;

          case 'ArrowLeft':
            _this3.moveDirX = speed;
            break;

          case 'ArrowRight':
            _this3.moveDirX = -speed;
            break;

          default:
            break;
        }
      }); // handle keyup for arrow keys

      document.addEventListener('keyup', function (e) {
        e.preventDefault();
        var horKeys = ['ArrowLeft', 'ArrowRight'];
        var verKeys = ['ArrowUp', 'ArrowDown'];

        if (horKeys.includes(e.key)) {
          _this3.moveDirX = 0;
        }

        if (verKeys.includes(e.key)) {
          _this3.moveDirY = 0;
        }
      });
    }
  }, {
    key: "move",
    value: function move(reverse) {
      var _this4 = this;

      // * testing
      if (reverse) {
        this.entities.forEach(function (entity) {
          return entity.move(-_this4.moveDirX, -_this4.moveDirY);
        });
        this.creatures.forEach(function (entity) {
          return entity.move(-_this4.moveDirX, -_this4.moveDirY);
        });
        this.sandBox.move(-this.moveDirX, -this.moveDirY);
      } else {
        this.entities.forEach(function (entity) {
          return entity.move(_this4.moveDirX, _this4.moveDirY);
        });
        this.creatures.forEach(function (entity) {
          return entity.move(_this4.moveDirX, _this4.moveDirY);
        });
        this.sandBox.move(this.moveDirX, this.moveDirY);
      } // this.player.move();
      // this.creatures.forEach(creature => creature.move(this.moveDirX, this.moveDirY));

    }
  }, {
    key: "checkCollision",
    value: function checkCollision() {
      var _this5 = this;

      return this.entities.some(function (entity) {
        return entity.isCollision(_this5.player);
      });
    }
  }]);

  return Game;
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");

document.addEventListener("DOMContentLoaded", function () {
  var canvas = document.getElementById('canvas');
  var DIM_X = 1600;
  var DIM_Y = 900;
  var ctx = canvas.getContext('2d');
  canvas.width = DIM_X;
  canvas.height = DIM_Y;
  var game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"]({
    DIM_X: DIM_X,
    DIM_Y: DIM_Y,
    ctx: ctx
  });
  game.start();
});

/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Map; });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/entity.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Map = /*#__PURE__*/function () {
  function Map(options) {
    _classCallCheck(this, Map);

    this.player = options.player;
    this.height = options.height; // pass in src for wall object and floor

    this.wall = options.wall;
    this.floor = options.floor;
    this.outside = options.outside;
    this.wallEntities = [];
    this.floorTiles = [];
    this.background = [];
    this.inanimateEntities = []; // instantiate the following

    this.createBorder();
    this.boundary();
    this.createFloor();
    this.createOutside();
    this.createInanimateEntities();
  }

  _createClass(Map, [{
    key: "createBorder",
    value: function createBorder() {
      var n = 20;
      this.spacing = this.height / n;
      var spacing = this.spacing;

      for (var i = 0; i < n; i++) {
        // left border
        this.wallEntities.push(new _entity__WEBPACK_IMPORTED_MODULE_0__["default"]({
          pos: [0, i * spacing],
          dim: [spacing, spacing],
          src: this.wall
        })); // right border

        this.wallEntities.push(new _entity__WEBPACK_IMPORTED_MODULE_0__["default"]({
          pos: [this.height, i * spacing + spacing],
          dim: [spacing, spacing],
          src: this.wall
        })); // top border

        this.wallEntities.push(new _entity__WEBPACK_IMPORTED_MODULE_0__["default"]({
          pos: [i * spacing + spacing, 0],
          dim: [spacing, spacing],
          src: this.wall
        })); // bottom border

        this.wallEntities.push(new _entity__WEBPACK_IMPORTED_MODULE_0__["default"]({
          pos: [i * spacing, this.height],
          dim: [spacing, spacing],
          src: this.wall
        }));
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      this.background.forEach(function (tile) {
        return tile.draw(ctx);
      });
      this.floorTiles.forEach(function (tile) {
        return tile.draw(ctx);
      });
      this.wallEntities.forEach(function (entity) {
        return entity.draw(ctx);
      });
    }
  }, {
    key: "boundary",
    value: function boundary() {
      // Bounds are determined by their X or Y values
      // ex: X = 0 or Y = 10
      // top bound in terms of Y
      this.topBound = this.spacing; // right bound in terms of X

      this.rightBound = this.height; // bottom bound in terms of Y

      this.bottomBound = this.height; // left bound in terms of X

      this.leftBound = this.spacing;
    }
  }, {
    key: "move",
    value: function move(dx, dy) {
      // adjust bounds
      this.topBound += dy;
      this.rightBound += dx;
      this.bottomBound += dy;
      this.leftBound += dx; // adjust pos for each tile

      this.floorTiles.forEach(function (tile) {
        return tile.move(dx, dy);
      }); // adjust pos for each wall object

      this.wallEntities.forEach(function (entity) {
        return entity.move(dx, dy);
      });
      this.background.forEach(function (tile) {
        return tile.move(dx, dy);
      });
    }
  }, {
    key: "outOfBounds",
    value: function outOfBounds(entity) {
      // check if entity's hitbox is above top bound
      if (entity.hitboxCenter[1] - entity.hitboxRadius < this.topBound) return true; // check if entity's hitbox is below bottom bound

      if (entity.hitboxCenter[1] + entity.hitboxRadius > this.bottomBound) return true; // check if entity's hitbox is out of left bound

      if (entity.hitboxCenter[0] - entity.hitboxRadius < this.leftBound) return true; // check if entity's hitbox is out of right bound

      if (entity.hitboxCenter[0] + entity.hitboxRadius > this.rightBound) return true; // otherwise

      return false;
    }
  }, {
    key: "createFloor",
    value: function createFloor() {
      // n x n grass tiles
      var n = 20;
      var dim = this.height / n;
      var xOffset = this.spacing / 2;
      var yOffset = this.spacing * .8;

      for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
          this.floorTiles.push(new _entity__WEBPACK_IMPORTED_MODULE_0__["default"]({
            pos: [i * dim + xOffset, j * dim + yOffset],
            dim: [dim, dim],
            src: this.floor
          }));
        }
      }
    }
  }, {
    key: "createOutside",
    value: function createOutside() {
      var n = 50;
      var offset = 900;
      var dim = (this.height + 2 * offset) / n;

      for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
          // manually found best size, this prevents drawing too many assets
          // optimized for 5000+ height
          if (i < 8 || j < 8 || i > 42 || j > 42) this.background.push(new _entity__WEBPACK_IMPORTED_MODULE_0__["default"]({
            pos: [i * dim - offset, j * dim - offset],
            dim: [dim, dim],
            src: this.outside
          }));
        }
      }
    }
  }, {
    key: "createInanimateEntities",
    value: function createInanimateEntities() {
      var _this = this;

      // randomly place n trees
      var treeDim = 300;
      var numTrees = 30;
      var xRange = this.rightBound - this.leftBound - treeDim;
      var yRange = this.bottomBound - this.topBound - treeDim;

      var _loop = function _loop(_i) {
        var randPos = _util__WEBPACK_IMPORTED_MODULE_1__["randPos"](xRange, yRange, _this.leftBound, _this.topBound);

        var entities = _this.inanimateEntities.concat(_this.player);

        var newTree = new _entity__WEBPACK_IMPORTED_MODULE_0__["default"]({
          pos: [randPos[0], randPos[1]],
          dim: [treeDim, treeDim],
          src: 'assets/sprites/tree.png'
        }); // if the tree overlaps the player or other tree redo iteration

        var invalidPos = entities.some(function (entity) {
          return newTree.isCollision(entity);
        });
        if (invalidPos) _i--;else _this.inanimateEntities.push(newTree);
        i = _i;
      };

      for (var i = 0; i < numTrees; i++) {
        _loop(i);
      }
    }
  }]);

  return Map;
}();



/***/ }),

/***/ "./src/slime.js":
/*!**********************!*\
  !*** ./src/slime.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slime; });
/* harmony import */ var _creature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creature */ "./src/creature.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Slime = /*#__PURE__*/function (_Creature) {
  _inherits(Slime, _Creature);

  var _super = _createSuper(Slime);

  function Slime(options) {
    _classCallCheck(this, Slime);

    return _super.call(this, options);
  }

  _createClass(Slime, [{
    key: "move",
    value: function move() {// Do not move because the player should be in the center of the frame of
      // reference
    }
  }, {
    key: "eat",
    value: function eat(enemies) {
      var _this = this;

      enemies.forEach(function (enemy, i) {
        if (_this.eatable(enemy)) {
          _this.grow(enemy); // remove enemy


          delete enemies[i];
        }
      });
    }
  }, {
    key: "eatable",
    value: function eatable(enemy) {
      var dx = this.hitboxCenter[0] - enemy.hitboxCenter[0];
      var dy = this.hitboxCenter[1] - enemy.hitboxCenter[1];
      var distance = Math.sqrt(dx * dx + dy * dy);
      var minDistance = this.hitboxRadius;

      if (distance < minDistance && this.hitboxRadius < enemy.hitboxRadius) {
        this.dead = true;
      }

      if (distance < minDistance && this.hitboxRadius > enemy.hitboxRadius) {
        return true;
      } else return false;
    }
  }, {
    key: "grow",
    value: function grow(enemy) {
      var _this2 = this;

      var enemyVolume = Math.pow(enemy.hitboxRadius, 3) * Math.PI * 4 / 3;
      var playerVolume = Math.pow(this.hitboxRadius, 3) * Math.PI * 4 / 3;
      var newVolume = enemyVolume + playerVolume;
      var newRadius = Math.pow(newVolume / Math.PI * 3 / 4, 1 / 3); // apply new radius

      this.hitboxRadius = newRadius; // apply new dimensions using diameter

      this.dim = [newRadius * 2, newRadius * 2]; // adjust hitbox center

      this.hitboxCenter = this.pos.map(function (_, i) {
        return _this2.pos[i] + _this2.dim[i] / 2;
      });
    }
  }]);

  return Slime;
}(_creature__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: randPos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randPos", function() { return randPos; });
var randPos = function randPos(xRange, yRange, xOffset, yOffset) {
  var randPos = [];
  var randXPos = Math.random() * xRange + xOffset;
  randPos.push(randXPos);
  var randYPos = Math.random() * yRange + yOffset;
  randPos.push(randYPos);
  return randPos;
};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map