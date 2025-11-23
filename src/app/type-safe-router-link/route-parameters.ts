export type RouteParameters<T extends { path?: string }> = string extends T['path']
  ? never
  : T['path'] extends `${string}:${infer RouteParameter}/${infer Rest}`
    ? Record<RouteParameter | keyof RouteParameters<{ path: Rest }>, string>
    : T['path'] extends `${string}:${infer RouteParameter}`
      ? Record<RouteParameter, string>
      : {};
