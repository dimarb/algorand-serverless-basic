"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var tealscript_1 = require("@algorandfoundation/tealscript");
var Simple = /** @class */ (function (_super) {
    __extends(Simple, _super);
    function Simple() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.counter = GlobalStateKey({ key: 'counter' });
        return _this;
    }
    Simple.prototype.incrementCounter = function (i) {
        this.counter.value = this.counter.value + i;
    };
    Simple.prototype.incr = function (i) {
        this.incrementCounter(i);
    };
    Simple.prototype.decr = function (i) {
        this.counter.value = this.counter.value - i;
    };
    Simple.prototype.add = function (a, b) {
        return a + b;
    };
    Simple.prototype.sub = function (a, b) {
        return a - b;
    };
    Simple.prototype.clearState = function () {
        this.incrementCounter(1);
    };
    return Simple;
}(tealscript_1.Contract));
exports.default = Simple;
//# sourceMappingURL=contract.algo.js.map