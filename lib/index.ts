import * as P from './pipe'
import * as U from './utils'
import * as F from './functor'
import * as A from './array'
import * as S from './string'

P.pipe(
  A.range(0, 10),
  A.takeWhile((value) => value < 5),
  A.filter((value) => value % 2 === 0),
  A.fold(0, (total, value) => total + value),
  F.map((value) => A.range(0, value)),
  A.count()
)

P.pipe(
  'Hello, world!',
  S.charCodes(),
  A.map((code) => code + 1),
  S.fromCharCodes()
)
