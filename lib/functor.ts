export function map<A, B>(fn: (value: A) => B) {
  return (value: A) => fn(value)
}
