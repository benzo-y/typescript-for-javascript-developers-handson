export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctonType = Exclude<SomeTypes, string | number>;
type NunFunctionType = Exclude<SomeTypes, DebugType>;
type TypeExcludeingFunction = Exclude<SomeTypes, Function>;

type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type functionTypeExtractingFunction = Extract<SomeTypes, Function>;

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
