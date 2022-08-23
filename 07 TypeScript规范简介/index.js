"use strict";
var EnumDeclaration;
(function (EnumDeclaration) {
})(EnumDeclaration || (EnumDeclaration = {}));
// 所有类型的父类型 any
var anyValue = JSON.parse('');
// 子类型 primitive types, object types, union types, intersection types, or type parameters
// 即是值 也是 类型声明情况
var DoubleMeanClass = /** @class */ (function () {
    function DoubleMeanClass() {
        this.name = "hello";
    }
    return DoubleMeanClass;
}());
var classAsType = {
    name: "name"
};
var classAsValue = DoubleMeanClass;
var DoubleMeanNamespace;
(function (DoubleMeanNamespace) {
    DoubleMeanNamespace.hi = 'string';
})(DoubleMeanNamespace || (DoubleMeanNamespace = {}));
var namespaceAsValue = DoubleMeanNamespace;
var namespaceAsType = 'hi';
