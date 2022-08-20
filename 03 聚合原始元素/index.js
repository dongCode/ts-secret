"use strict";
12 + 12; // 24
var firstName = "jack ";
var secondName = "belle";
firstName + secondName;
function double(num) {
    return num * 2;
}
var person = {
    firstName: "jack",
    secondName: "leno"
};
var arr = [1];
arr.push(1);
// Type 'string' is not assignable to type 'number'.
arr = ['1'];
// Argument of type 'string' is not assignable to parameter of type 'number'.
arr.push('string');
var tuple = [1, '1'];
tuple.push(1);
tuple.pop();
//  Type '[number]' is not assignable to type '[number, string]'.
//  Source has 1 element(s) but target requires 2.
tuple = [1];
