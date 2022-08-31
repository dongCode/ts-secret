{
  type Person = {
    name: string;
  };
  type Car = {
    wheel: number;
  };
  type PersonCar = Person & Car;

  const a: PersonCar = {
    name: "jack",
    wheel: 4,
  };
}

{
  function extend<T extends object, U extends object>(
    first: T,
    second: U
  ): T & U {
    const result = <T & U>{};
    for (let id in first) {
      result[id] = first[id];
    }
    for (let id in second) {
      if (!result.hasOwnProperty(id)) {
        result[id] = second[id];
      }
    }

    return result;
  }

  const x = extend({ a: "hello" }, { b: 42 });

  // 现在 x 拥有了 a 属性与 b 属性
  const a = x.a;
  const b = x.b;
}

{
  type KeyOf<T> = Extract<keyof T, string>
  function extend<T extends object, U extends object>(
    first: T,
    second: U
  ): T & U {
    const result = <T & U>{};
    for (let key in first) {
      (<T>result)[key] = first[key];
    }

    for (let key in second) {
      // 去除重复的key
      if (!result.hasOwnProperty(key)) {
        (<U>result)[key] = second[key];
      }
    }
    return result;
  }

  const x = extend({ a: "hello" }, { b: 42 });

  // 现在 x 拥有了 a 属性与 b 属性
  const a = x.a;
  const b = x.b;
}
