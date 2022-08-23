// keyof type operator

{
  type TwoD = { x: number; y: number };
  type XorY = keyof TwoD;

  const keyX: XorY = "x";

  interface ThreeD {
    x: number;
    y: number;
    z: number;
  }

  type ThreeDKey = keyof ThreeD;

  type TupleObj = [string, number];

  type NumTuple = keyof TupleObj;

  const num: NumTuple = 11111;

  // obj[0] 等效与 obj["o"]
  type ArrStr = { [k: string]: string }

  type StrOrNum = keyof ArrStr

}

{
  // mapped types
  
  type MapType = {
    [key: string]: string | boolean
  }
  
  const OnlyStrAndBol: MapType = {
    name: 'jack',
    young: true,
    age: 11 // Error
  }

  type MapUtil<Parameter, NeedType> = {
    [Key in keyof Parameter]: NeedType
  }

  type TwoD = {x: number, y: number}

  type MapTwoD = MapUtil<TwoD, string | boolean>

  const TwoDStrOrBol: MapTwoD = {
    x: false,
    y: 1,
  }
}


// Mapped Types
// 规定一个对象所有键值的类型
type MapType = {
  [key: string]: string | boolean;
};

const OnlyStrAndBol: MapType = {
  name: "jack",
  young: true,
  age: 11, // Error
};
