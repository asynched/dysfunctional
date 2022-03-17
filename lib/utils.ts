export function identity<A>(value: A) {
  return value
}

export function inspect<A>(inspector: (value: A) => void) {
  return (value: A) => {
    inspector(value)
    return value
  }
}
