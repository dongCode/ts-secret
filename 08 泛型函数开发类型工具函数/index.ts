
{
  // keyof type operator

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
  
  type MapGeneric<NeedType> = {
    [key: string]: NeedType
  }
  
  const OnlyStrAndBol: MapGeneric<string | boolean> = {
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

{
   // typeof type operator
   // 两种基本用法
   var x = 5;
   // 用在表达式中,返回 ‘number’ 字符串，即JS中的用法
   var y = typeof x; // Use in an expression
   // 用在类型提取中，即TS拓展的类型语法
   var z: typeof x; // Use in a type query


   let c: typeof c

   // 递归类型
   var d: { a: typeof d}
   var h: () => typeof h;

   // 类型守卫
   function isLongStr(param: any) {
    return typeof param === 'string' && str.length > 100
  }
   function processNum (param: number | (() => number)) {
      const num = typeof param === 'number' ? param : param()
      return num.toFixed(1)
   }
   function numOrStr(param: number | string) {
     if(typeof param === 'number') {
       return param.toFixed(1)
     } else {
       return param.length
     }
   }
}

{
  type P =  {
    x: number,
    y: string
  }

  type P2 = Partial<P>

  type PGeneric<Type> = {
    [Key in keyof Type]?: Type[Key]
  }

  type P3 = PGeneric<P>
}