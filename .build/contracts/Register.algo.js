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
// eslint-disable-next-line no-unused-vars
var Register = /** @class */ (function (_super) {
    __extends(Register, _super);
    function Register() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.metaData = BoxMap();
        _this.myMeta = GlobalStateKey();
        return _this;
    }
    Register.prototype.addData = function (box, key, data) {
        var meta = {
            key: key,
            data: data,
        };
        this.myMeta.value = meta;
        assert(!this.metaData(box).exists);
        this.metaData(box).value = meta;
    };
    Register.prototype.getData = function (box) {
        var meta = this.metaData(box).value;
        return meta;
    };
    return Register;
}(tealscript_1.Contract));
//# sourceMappingURL=Register.algo.js.map