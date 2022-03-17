import * as P from './pipe'
import * as U from './utils'
import * as F from './functor'
import * as A from './array'
import * as S from './string'

P.pipe(
  'Eder',
  F.map((name) => `Hello, ${name}!`),
  U.inspect((value) => console.log(value))
)
