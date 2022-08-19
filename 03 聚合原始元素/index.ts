12 + 12; // 24

const firstName: string = "jack ";
const secondName: string = "belle";

firstName + secondName;

function double(num: number): number {
  return num * 2;
}

let person: {
  firstName: string;
  secondName: string;
} = {
  firstName: "jack",
  secondName: "leno",
};


let arr: number[] = [1]

arr.push(1)
// Type 'string' is not assignable to type 'number'.
arr = ['1']
// Argument of type 'string' is not assignable to parameter of type 'number'.
arr.push('string')


let tuple: [number,string] = [1, '1']

tuple.push(1)
tuple.pop()
//  Type '[number]' is not assignable to type '[number, string]'.
//  Source has 1 element(s) but target requires 2.
tuple = [1]
