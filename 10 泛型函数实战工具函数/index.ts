{
  // ReturnType<Type> => Tuple
  type NumOrStr<T> = T extends number ? number : string; // 条件判断
  type IsFnType<T> = T extends (...args: any) => any ? true : false; // 是否是函数类型
  type ReturnGeneric<T extends (...args: any) => any> = T extends (
    ...args: any
  ) => infer R
    ? R
    : any; // 条件判断

  type R0 = ReturnType<() => string>;
  type R1 = ReturnGeneric<() => string>;
  type R2 = ReturnGeneric<() => string | number>;
}

{
  // Parameters<Type> => Tuple Type

  type ParamsGeneric<T extends (...args: any) => any> = T extends (
    ...args: infer ArgsType
  ) => any
    ? ArgsType
    : any; // 条件判断

  type P0 = ParamsGeneric<() => string>;
  type P1 = ParamsGeneric<(a: string | number) => string>;
}

{
  // ConstructorParameters<Type>
  type T0 = ConstructorParameters<ErrorConstructor>;
  // 限制传入参数符合 abstract new (...args: any) => any 模板
  // 通过条件判断类型关键字 infer 提取 args
  type ConstructorGeneric<T extends abstract new (...args: any) => any> =
    T extends abstract new (...args: infer P) => any ? P : never;

  interface Book {
    new (author: string, title: string): void;
  }

  type T1 = ConstructorGeneric<Book>;
  type T2 = ConstructorGeneric<DateConstructor>;
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

