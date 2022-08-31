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


