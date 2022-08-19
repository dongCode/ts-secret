type Primitive = string | number | boolean | bigint | symbol | undefined | null;

type Double = (num: number) => number;

interface Person {
  firstName: string;
  lastName: string;
}

type TPerson = {
  firstName: string;
  lastName: string;
};

interface Person {
  age: number;
}

type TPerson = {
  age: number;
};

export {};
