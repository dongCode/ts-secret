// 扩展的标识符
interface InterfaceDeclaration {}

type TypeAliasDeclaration = string;

enum EnumDeclaration {}


//  Ambient Declaration
declare var $:any

// Function Type

type FnType = (n: number) => void // Function Type
interface FnInterface {
  (n: number): void
}

// 类型重载

class Employee {}

//Overload Signature 1
function findEmployees(name: string): Employee[]; 
//Overload Signature 2
function findEmployees(name: string, age: number): Employee[]; 	
//Overload Signature 3
function findEmployees(name: string, age: number, location: string): Employee[]; 	
//Implementation Signature 实际定义
function findEmployees(name: string, age?: number, location?: string): Employee[] {   

	let employee: Employee[] = [];

  if(age != undefined && location != undefined) {
    //find employees by name, age and location
  } else {
    //find employees by name and age
  }

	return employee;
}
// enum
const enum Operator {
 ADD,
 DIV,
 MUL,
 SUB
}


// Object Types

interface Obj {
  name: string
}

// 所有类型的父类型 any

const anyValue = JSON.parse('')

// 子类型 primitive types, object types, union types, intersection types, or type parameters


// 即是值 也是 类型声明情况
class DoubleMeanClass {
  name: string;
  constructor() {
    this.name = "hello";
  }
}

const classAsType: DoubleMeanClass = {
  name: "name",
};

const classAsValue = DoubleMeanClass;

namespace DoubleMeanNamespace {
  export type Union = string | number
  export const hi = 'string';
}

const namespaceAsValue = DoubleMeanNamespace;
const namespaceAsType: DoubleMeanNamespace.Union = 'hi'


