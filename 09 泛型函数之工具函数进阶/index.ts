{
  // Pick<T, Keys>
  type Person = {
    age: number,
    name: string,
    young: boolean
  }
  type Num = Pick<Person, 'age'>
 

  type PickGeneric<Obj, Keys extends keyof Obj> = {
    [key in Keys]: Obj[key]
  }

  type AgeNameGeneric = PickGeneric<Person, 'age' | 'name'>
  
  const p1: AgeNameGeneric = {
    age: 22,
    name: 'jack'
  }

}

{
  // Exclude<UnionType, Keys>

  // 排除一个的基本写法
  type Union = 'age' | 'name' | 'young'
  type ExcludeKey = 'age'
  type NumAgeYoung = Union extends ExcludeKey ? never : Union

  type Num = Exclude<string | number, string>

  type ExcludeGeneric<UnionType, ExcludedKeys> = UnionType extends ExcludedKeys ? never : UnionType

  type Str = ExcludeGeneric<string | number, number>

}

{
  // Omit<Type, Keys>
  type Person = {
    age: number,
    name: string,
    young: boolean
  }
  type AgeName = Omit<Person, 'young'>

  type OmitGeneric<ObjType, Keys extends string | number | symbol> = {
    [Key in Exclude<keyof ObjType, Keys>]: ObjType[Key]
  }
  
  type AgeName2 = OmitGeneric<Person, 'young'>

}


{
  // Extract<UnionType, Keys>


  type Num = Extract<string | number, number>

  type ExtractGeneric<UnionType, ExcludedKeys> = UnionType extends ExcludedKeys ? UnionType : never

  type Str = ExtractGeneric<string | number, string>

}


{
  // NonNullable<Type>


  type T1 = NonNullable<string | number | undefined | null>

  type NoNull1<UnionType> = Exclude<UnionType, null | undefined>

  type NoNull2<UnionType> = UnionType extends null | undefined ? never : UnionType


  type T2 = NoNull1<string | number | undefined | null>

  type T3 = NoNull2<string | number | undefined | null>


}