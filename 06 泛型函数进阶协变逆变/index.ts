// 泛型函数进阶

type IsTrue<Parameter extends true> = Parameter

type True =  IsTrue<'dd'>
type True2 =  IsTrue<true>

// Equal

type Equals<X, Y> =
    (<T>() => T extends X ? 1 : 2) extends
    (<T>() => T extends Y ? 1 : 2) ? true : false;

type isEqualStr = Equals<string, number>

// Queue push shift
class Queue<T> {
  data: Array<T> = [];
  constructor () {
    this.data = []
  }
  push(item: T): number { return this.data.push(item); }
  pop(): T | undefined { return this.data.shift(); }
}

let queue: Queue<number> = new Queue();

queue.push(1)
queue.push(2)
queue.pop() // 1

// Stack push pop
class Stack<T> {
  data: Array<T>
  constructor () {
    this.data = []
  }
  push(item: T): number { return this.data.push(item)}
  pop(): T | undefined  { return this.data.pop() }
}
const stack: Stack<number> = new Stack();

stack.push(1)
stack.push(2)
stack.pop() // 2

// Structural Type System 
// 1. eq
type IsNumber<T extends number> = T

type eqNum = IsNumber<string> // 会报错
// 2. subtype
type IsSubType<SubType, BaseType> = SubType extends BaseType ? true : false

type StrSub = IsSubType<string, any> // true
type HiSub = IsSubType<'hi', string> // true
type OneSub = IsSubType<1, number> // true

// 类型的协变 Covariant

// 第一个条件 类型参数的满足 SubType -> BaseType
class User {
  username: string;
 
  constructor(username: string) {
    this.username = username;
  }
}
 
class Admin extends User {
  isSuperAdmin: boolean;
 
  constructor(username: string, isSuperAdmin: boolean) {
    super(username);
    this.isSuperAdmin = isSuperAdmin;
  }
}

type Sub = IsSubType<Admin, User> // true

// 第二个条件 T<SubType> -> T<BaseType>  那么 Array 类型是协变的
type ArrayBase = Array<User>
type ArraySub = Array<Admin>
type IsCovariant = IsSubType<ArraySub, ArrayBase>


// 类型的逆变 Contravariant


// 第二个条件 T<BaseType> -> T<SubType>  那么 Array 类型是协变的
type ContravariantType<T> = (param: T) => void 
type Base2 = ContravariantType<User>
type Sub2 = ContravariantType<Admin>
type IsCovariant2 = IsSubType<Base2, Sub2> // true
type IsCovariant3 = IsSubType<Sub2, Base2> // false

export {}