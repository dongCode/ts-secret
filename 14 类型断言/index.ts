{
  // 基本语法
  let a = {} as { name: string };
  a.name;

  let b = {};
  b.name; //

  interface Person {
    name: string;
  }

  interface Person {
    name: string;
  }

  let c = <Person>{};
  c.name;

  class Shape {}
  class Circle extends Shape {}
  function createShape(kind: string): Shape {
    if (kind === "circle") return new Circle();
    return new Shape()
  }
  var circle = <Circle>createShape("circle"); // circle
}

{
  // [key: string]: any
  interface Person {
    name: string;
  }

  let c: Person = {
    name: "jack",
    age: 11,
  };

  interface PersonAssertion {
    name: string;
    [key: string]: any;
  }

  let d: PersonAssertion = {
    name: "jack",
    age: 11,
  };
}

{
  // 缺点

  interface Person {
    name: string;
  }

  let c: Person = {};
}

{
  interface CompilerOptions {
    strict?: boolean;
    sourcePath?: string;
    targetPath?: string;
  }
  var options: CompilerOptions = {
    strict: true,
    sourcepath: "./src", // Error, excess or misspelled property
    targetpath: "./bin", // Error, excess or misspelled property
  };
}
