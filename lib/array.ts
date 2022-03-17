/**
 * # map
 *
 * Maps the values of an array to a new array.
 *
 * @param predicate Predicate function to apply over the array.
 * @returns Newly mapped array.
 */
export function map<A, B>(predicate: (value: A) => B) {
  return (source: A[]) => source.map(predicate)
}

/**
 * # flatMap
 *
 * Maps over the values of an array and flattens the result.
 *
 * @param predicate Predicate function to apply over the array.
 * @returns Newly mapped array.
 */
export function flatMap<A, B>(predicate: (value: A) => B) {
  return (source: A[]) => source.flatMap(predicate)
}

/**
 * # findMap
 *
 * Maps over the values of an array and returns the first value that passes the predicate.
 *
 * @param predicate Predicate function to apply over the array.
 * @returns First truthy item of the array with the predicate applied.
 */
export function findMap<A, B>(predicate: (value: A) => B) {
  return (source: A[]): B | undefined => {
    for (let i = 0; i < source.length; i++) {
      let applied = predicate(source[i])
      if (applied) {
        return applied
      }
    }
  }
}

/**
 * # filter
 *
 * Filters the values of an array to a new array and applied the predicate function to it.
 *
 * @param predicate Predicate function to apply over the array.
 * @returns All truthy items that passes the predicate with itself applied.
 */
export function filterMap<A, B>(predicate: (value: A) => B) {
  return (source: A[]) => {
    let filtered = []

    for (let index = 0; index < source.length; index++) {
      let result = predicate(source[index])

      if (result) {
        filtered.push(result)
      }
    }

    return filtered
  }
}

export function forEach<A>(predicate: (value: A) => void) {
  return (source: A[]) => source.forEach(predicate)
}

export function filter<A>(predicate: (value: A) => boolean) {
  return (source: A[]) => source.filter(predicate)
}

export function reduce<A, B>(predicate: (acc: B, value: A) => B, initial: B) {
  return (source: A[]) => source.reduce(predicate, initial)
}

export function fold<A, B>(initial: B, predicate: (acc: B, value: A) => B) {
  return (source: A[]) => source.reduce(predicate, initial)
}

export function foldRight<A, B>(
  initial: B,
  predicate: (acc: B, value: A) => B
) {
  return (source: A[]) => source.reduceRight(predicate, initial)
}

// Utils
export function all<A>(predicate: (value: A) => boolean) {
  return (source: A[]): boolean => source.every(predicate)
}

export function some<A>(predicate: (value: A) => boolean) {
  return (source: A[]): boolean => source.some(predicate)
}

export function none<A>(predicate: (value: A) => boolean) {
  return (source: A[]): boolean => !some(predicate)(source)
}

export function find<A>(predicate: (value: A) => boolean) {
  return (source: A[]): A | undefined => source.find(predicate)
}

export function position<A>(predicate: (value: A) => boolean) {
  return (source: A[]): number => source.findIndex(predicate)
}

export function sum() {
  return (source: number[]) => source.reduce((total, item) => total + item, 0)
}

/**
 * # take
 *
 * Takes the first N items of the array.
 *
 * @param many Items to take from the array.
 * @returns Array with the first `N` items.
 */
export function take<A>(many: number) {
  return (source: A[]): A[] => source.slice(0, many)
}

export function takeWhile<A>(predicate: (value: A) => boolean) {
  return (source: A[]): A[] => {
    let i = 0
    while (predicate(source[i])) {
      i++
    }
    return source.slice(0, i)
  }
}

/**
 * # skip
 *
 * Skips the first n items of an array.
 *
 * @param many Items to skip.
 * @returns The original array minus items.
 */
export function skip<A>(many: number) {
  return (source: A[]): A[] => source.slice(many)
}

export function skipWhile<A>(predicate: (value: A) => boolean) {
  return (source: A[]): A[] => {
    let i = 0
    while (predicate(source[i])) {
      i++
    }
    return source.slice(i)
  }
}

export function chain<A>(iter: A[]) {
  return (source: A[]): A[] => [...source, ...iter]
}

export function count<A>(counterFunction?: (value: A) => number) {
  return (source: A[]) =>
    counterFunction ? source.filter(counterFunction).length : source.length
}

export function partition<A>(predicate: (value: A) => boolean) {
  return (source: A[]): [A[], A[]] => {
    let truthy: A[] = []
    let falsy: A[] = []

    for (let index = 0; index < source.length; index++) {
      let item = source[index]
      let result = predicate(item)

      if (result) {
        truthy.push(item)
      } else {
        falsy.push(item)
      }
    }

    return [truthy, falsy]
  }
}

export function inspect<A>(predicate: (value: A) => void) {
  return (source: A[]): A[] => {
    return source.map((item) => {
      predicate(item)
      return item
    })
  }
}

export function first<A>() {
  return (source: A[]): A => source[0]
}

export function last<A>() {
  return (source: A[]) => source[source.length - 1]
}

export function nth<A>(n: number) {
  return (source: A[]): A => source[n]
}

/**
 * # range
 *
 * Creates an array of numbers from start to end.
 *
 * @param start Start value.
 * @param end Final value.
 * @returns An array from `start` to `end` - 1.
 */
export function range(start: number, end: number): number[] {
  return Array.from({ length: end - start }, (_, i) => i + start)
}

/**
 * # rangeInclusive
 *
 * Creates an inclusive range of numbers.
 *
 * @param start Start value for the range.
 * @param end Final value for the range.
 * @returns An array of n members from `start` to `end` including the end value.
 */
export function rangeInclusive(start: number, end: number): number[] {
  return range(start, end + 1)
}

export function enumerate<A>() {
  return (source: A[]): Array<[number, A]> =>
    source.map((item, index) => [index, item])
}
