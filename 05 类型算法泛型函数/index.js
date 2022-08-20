"use strict";
// 基本泛型函数语法
exports.__esModule = true;
var hi = 'hi';
var IdentifyClass = /** @class */ (function () {
    function IdentifyClass() {
        this.identify = function (arg) { return arg; };
    }
    return IdentifyClass;
}());
// 与 JavaScript 绑定
var num = 1;
var str = 'str';
var bol = true;
// Array
var arr = [];
arr.push(1);
arr.push('1');
var arrGeneric = [];
arrGeneric.push(1);
arrGeneric.push('s');
var arrLike = { 0: 0, 1: 1, length: 2 };
var tuple1 = ['1', 1];
tuple1[2];
var tuple2 = ['1', 1];
tuple2[2];
