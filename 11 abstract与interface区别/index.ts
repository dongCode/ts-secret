{
  // 基本使用
  interface Car {
    getName(): string;
  }

  abstract class Base {
    abstract getName(): string;
  }

  const b1 = new Base();
}

{
  // 区别
  abstract class Base {
    abstract getName(): string;
  }

  interface Base2 {
    getName(): string;
  }
  // 通过关键字 extends
  class Derived extends Base {
    getName() {
      return "world";
    }
  }

  // 通过关键字 implements
  class Derived1 implements Base2 {
    getName() {
      return "world";
    }
  }
  const d = new Derived();
  d.getName();
}

{
  // 抽离new操作符参数

  type ConstructorGeneric<T extends abstract new (...args: any) => any> =
    T extends abstract new (...args: infer P) => any ? P : never;

  interface Book {
    new (author: string, title: string): void;
  }

  type T1 = ConstructorGeneric<Book>;
}

{
  // InstanceType<Type>

  class C {
    x = 0;
    y = 0;
  }

  type T0 = InstanceType<typeof C>;
  type T2 = InstanceType<StringConstructor>;

  type InstanceGeneric<T extends abstract new (...args: any) => any> =
    T extends abstract new (...args: any) => infer InstanceType
      ? InstanceType
      : never;
}

{
  // ThisParameterType<Type> => ThisType | unknown
  type toHex = (this: number) => string;

  type T0 = ThisParameterType<toHex>;

  type ThisGeneric<T> = T extends (this: infer ThisType, ...args: never) => any
    ? ThisType
    : unknown;

  type T1 = ThisParameterType<toHex>;
}

{
  // OmitThisParameter<Type>  去除this: Type
  type toHex = (this: number) => string;

  type T0 = OmitThisParameter<toHex>;

  // 第一个判断 unknown extends ThisParameterType<T> 没有 this parameters 直接返回 T
  // 第二个判断 T 有 this parameters 即符合 (this: any,...args: any) => any，直接提取 args ，
  // 返回参数类型组成去除this parameters的类型 (...args: A) => R
  type OmitThisGeneric<T> = unknown extends ThisParameterType<T>
    ? T
    : T extends (...args: infer A) => infer R
    ? (...args: A) => R
    : T;

  type T1 = OmitThisGeneric<toHex>;

  type T2 = OmitThisGeneric<string>;
}
