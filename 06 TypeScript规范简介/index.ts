// 扩展的标识符
interface InterfaceDeclaration {}

type TypeAliasDeclaration = string;

enum EnumDeclaration {}

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
