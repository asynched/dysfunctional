import { pipe } from './pipe'

export function split(separator: string) {
  return (source: string) => source.split(separator)
}

export function reverse() {
  return (source: string) => source.split('').reverse().join()
}

export function join<A>(character: string) {
  return (source: A[]) => source.join(character)
}

export function capitalize() {
  return (source: string) => source.charAt(0).toUpperCase() + source.slice(1)
}

export function chars() {
  return (source: string) => source.split('')
}

export function charCodes() {
  return (source: string) => pipe(source, chars()).map((c) => c.charCodeAt(0))
}

export function fromCharCode() {
  return (source: number) => String.fromCharCode(source)
}

export function fromCharCodes() {
  return (source: number[]) => String.fromCharCode(...source)
}

export function capitalizeEvery(separator: string | RegExp = ' ') {
  return (source: string) => {
    return source
      .split(separator)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }
}
