export function pipe<A>(source: A): A

export function pipe<A, B>(source: A, fnA: (value: A) => B): B

export function pipe<A, B, C>(
  source: A,
  fnA: (value: A) => B,
  fnB: (value: B) => C
): C

export function pipe<A, B, C, D>(
  source: A,
  fnA: (value: A) => B,
  fnB: (value: B) => C,
  fnC: (value: C) => D
): D

export function pipe<A, B, C, D, E>(
  source: A,
  fnA: (value: A) => B,
  fnB: (value: B) => C,
  fnC: (value: C) => D,
  fnD: (value: D) => E
): E

export function pipe<A, B, C, D, E, F>(
  source: A,
  fnA: (value: A) => B,
  fnB: (value: B) => C,
  fnC: (value: C) => D,
  fnD: (value: D) => E,
  fnE: (value: E) => F
): F

export function pipe<A, B, C, D, E, F, G>(
  source: A,
  fnA: (value: A) => B,
  fnB: (value: B) => C,
  fnC: (value: C) => D,
  fnD: (value: D) => E,
  fnE: (value: E) => F,
  fnF: (value: F) => G
): G

export function pipe<A, B, C, D, E, F, G, H>(
  source: A,
  fnA: (value: A) => B,
  fnB: (value: B) => C,
  fnC: (value: C) => D,
  fnD: (value: D) => E,
  fnE: (value: E) => F,
  fnF: (value: F) => G,
  fnG: (value: G) => H
): H

export function pipe<A, B, C, D, E, F, G, H, I>(
  source: A,
  fnA: (value: A) => B,
  fnB: (value: B) => C,
  fnC: (value: C) => D,
  fnD: (value: D) => E,
  fnE: (value: E) => F,
  fnF: (value: F) => G,
  fnG: (value: G) => H,
  fnH: (value: H) => I
): I

export function pipe<A, B, C, D, E, F, G, H, I, J>(
  source: A,
  fnA: (value: A) => B,
  fnB: (value: B) => C,
  fnC: (value: C) => D,
  fnD: (value: D) => E,
  fnE: (value: E) => F,
  fnF: (value: F) => G,
  fnG: (value: G) => H,
  fnH: (value: H) => I,
  fnI: (value: I) => J
): J

export function pipe<A, B, C, D, E, F, G, H, I, J, K>(
  source: A,
  fnA: (value: A) => B,
  fnB: (value: B) => C,
  fnC: (value: C) => D,
  fnD: (value: D) => E,
  fnE: (value: E) => F,
  fnF: (value: F) => G,
  fnG: (value: G) => H,
  fnH: (value: H) => I,
  fnI: (value: I) => J,
  fnJ: (value: J) => K
): K

/**
 * # pipe
 *
 * Pipes the result of one array operation into another.
 *
 * @param source Pipe the values of the array through the functions
 * @param functions Functions to pipe the value to
 * @returns Result of the piped values
 */
export function pipe<A>(source: A, ...functions: Function[]) {
  if (functions.length === 0) {
    return source
  }

  return functions.reduce((piped, fn) => fn(piped), source)
}

export const lazy = (fn: Function) => {
  return (...args: any[]) => fn(...args)
}
