export type RoutesParameters<T extends { path?: string }[]> = T['length'] extends 0
  ? never
  : T['length'] extends 1
    ? RouteParameters<T[0]>
    : T extends [infer First extends { path?: string }, ...infer Rest extends { path?: string }[]]
      ? Record<keyof RouteParameters<First> | keyof RoutesParameters<Rest>, string>
      : never;

export type RouteParameters<T extends { path?: string }> = string extends T['path']
  ? never
  : T['path'] extends `${string}:${infer RouteParameter}/${infer Rest}`
    ? Record<RouteParameter | keyof RouteParameters<{ path: Rest }>, string>
    : T['path'] extends `${string}:${infer RouteParameter}`
      ? Record<RouteParameter, string>
      : {};
