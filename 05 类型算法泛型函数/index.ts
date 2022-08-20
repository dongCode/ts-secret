// 基本泛型函数语法

type Identify<Parameter> = Parameter

const hi:Identify<string> = 'hi'

// 三种形式

type IdentifyType<Type> = (arg: Type) => Type

interface IdentifyFn<Type> {
  <Type>(arg: Type): Type
}

class IdentifyClass<Type> {
  identify: (arg: Type) => Type
  constructor () {
    this.identify = (arg) => arg
  }
}

// 联合类型

type NumOrNul = number | null
type StrOrNul = string | null
type BolOrNul = boolean | null

// 泛型表达联合类型

type ValOrNul<ValueType> = ValueType | null

type NumOrNulGeneric = ValOrNul<number>

type StrOrNulGeneric = ValOrNul<string>

type BolOrNulGeneric = ValOrNul<boolean>

// 与 JavaScript 绑定

let num: NumOrNulGeneric = 1
let str: StrOrNulGeneric = 'str'
let bol: BolOrNulGeneric = true

// Array
const arr: Array<number> = []

arr.push(1)
arr.push('1')

// Array Generic
type ArrGeneric<Type> = Type[]

type ArrayNumber = ArrGeneric<number>

const arrGeneric: ArrayNumber = []
arrGeneric.push(1)
arrGeneric.push('s')

// array-like 
interface ArrayLike<Type> {
  length: number,
  [key: number]: Type // 扩展符
}

const arrLike: ArrayLike<number> = {0: 0, 1: 1, length: 2}

// tuple
type TupleType = [string, number]
const tuple1: TupleType = ['1', 1]
tuple1[2]

// tuple Generic
type TupleGeneric<X,Y> = [X,Y]
const tuple2: TupleGeneric<string, number> = ['1', 1]

tuple2[2]

export {}