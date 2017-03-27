(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = (function () {
    function Animal() {
    }
    Animal.prototype.walk = function () {
        return this.name + ' is Walking!';
    };
    Animal.prototype.sleep = function () {
        return this.name + ' is Sleeping';
    };
    Animal.prototype.setName = function (name) {
        this.name = name;
    };
    Animal.prototype.getName = function () {
        return this.name;
    };
    return Animal;
}());
exports.Animal = Animal;

},{}],2:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var animal_1 = require("./animal");
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(animal_1.Animal));
exports.Dog = Dog;

},{"./animal":1}],3:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var animal_1 = require("./animal");
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Horse;
}(animal_1.Animal));
exports.Horse = Horse;

},{"./animal":1}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var horse_1 = require("./horse");
var dog_1 = require("./dog");
var myHorse = new horse_1.Horse();
myHorse.setName('Little Horse');
console.log(myHorse.walk());
console.log(myHorse.sleep());
var myDog = new dog_1.Dog();
myDog.setName('Pretty dog');
console.log(myDog.walk());
console.log(myDog.sleep());

},{"./dog":2,"./horse":3}]},{},[4]);

//# sourceMappingURL=bundle.js.map
