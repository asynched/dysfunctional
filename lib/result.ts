/**
 * @module Something
 *
 */

export type Err<A> = {
  _tag: 'Err'
  value: A
}

export type Ok<A> = {
  _tag: 'Ok'
  value: A
}

export type Result<A, B> = Ok<A> | Err<B>

export function ok<A>(value: A): Ok<A> {
  return {
    _tag: 'Ok',
    value,
  }
}

export function err<A>(value: A): Err<A> {
  return {
    _tag: 'Err',
    value,
  }
}

const _ok = ok
const _err = err

export function bimap<A, B, C, D>(ok: (value: A) => C, err: (value: B) => D) {
  return (result: Result<A, B>): Result<C, D> => {
    return result._tag === 'Ok'
      ? _ok(ok(result.value))
      : _err(err(result.value))
  }
}

export function map<A, B, C>(ok: (value: A) => B) {
  return (result: Result<A, C>): Result<B, C> => {
    return result._tag == 'Ok' ? _ok(ok(result.value)) : result
  }
}

export function inspect<A, B>(ok: (value: A) => void) {
  return (result: Result<A, B>): Result<A, B> => {
    if (result._tag === 'Ok') {
      ok(result.value)
    }
    return result
  }
}
