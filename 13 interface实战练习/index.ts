{
  // 可扩展
  interface Dom {
    type: string;
  }

  interface Dom {
    name: string;
  }

  const dom: Dom = {
    type: "ele",
    name: "div",
  };
}

{
  // 与declare联合使用
  hi.version;

  // 可以读取扩展的属性
  myPoint.z; //
}

{
  // implements 限制 class
  interface Point {
    x: number;
    y: number;
  }

  class MyPoint implements Point {
    x!: number;
    y!: number; // 必须和Point声明的相同
  }
}

{
  abstract class Point {
    x!: number;
    y!: number;
  }
  class MyPoint extends Point {}
}

{
  // callable
  interface ReturnString {
    (): string;
  }

  const hi: ReturnString = () => "hi";
}

{
  // Overloaded
  interface ReturnOverload {
    (str: string): string;
    (num: number): number;
  }

  function hi(params: string): string;
  function hi(params: number): number;
  function hi(params: any): any {
    if (typeof params === "string") {
      return "hi";
    } else {
      return 1;
    }
  }

  let hiFn: ReturnOverload = hi;
}

{
  // newable

  const bar = new Foo(); // bar is inferred to be of type string
}

{
  // extends 实现继承

  interface Mover {
    move(): void;
    getStatus(): { speed: number };
  }
  interface Shaker {
    shake(): void;
    getStatus(): { frequency: number };
  }

  interface MoverShaker extends Mover, Shaker {
    getStatus(): { speed: number; frequency: number };
  }
}

{
  // Symbol.iterator
  interface Iterable<T> {
    [Symbol.iterator](): Iterator<T>;
  }

  var myIterable: Iterable<number> = {
    [Symbol.iterator]: function* () {
      yield 1;
      yield 2;
      yield 3;
    }
  };
  [...myIterable]; // [1, 2, 3]
}
