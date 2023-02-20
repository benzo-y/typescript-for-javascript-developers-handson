export {};

type MyExclude =
  | never /* (string extends string | number ? never : string) */
  | never /*(number extends string | number ? never : number)*/
  | DebugType; /*(DebugType extends string | number ? never : DebugType);*/
type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctonType = Exclude<SomeTypes, string | number>;
type MyFunctionTYpe = MyExclude;

type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
