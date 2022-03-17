export function split(separator: string) {
  return (source: string) => source.split(separator)
}

export function reverse(source: string) {
  return source.split('').reverse().join()
}

export function join<A>(character: string) {
  return (source: A[]) => source.join(character)
}

export function capitalize(source: string) {
  return source.charAt(0).toUpperCase() + source.slice(1)
}

export function chars(source: string) {
  return source.split('')
}

export function charCodes(source: string) {
  return chars(source).map((c) => c.charCodeAt(0))
}

export function fromCharCode(source: number) {
  return String.fromCharCode(source)
}

export function fromCharCodes(source: number[]) {
  return String.fromCharCode(...source)
}

export function capitalizeEvery(separator: string | RegExp = ' ') {
  return (source: string) => {
    return source
      .split(separator)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }
}
