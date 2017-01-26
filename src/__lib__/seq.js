export const head   = ([a])      => a
export const tail   = ([, ...t]) => t
export const empty  = (arr=[])   => !arr.length
export const apply  = (a, b) => b(a)
export const bind   = (val, fns=[]) => fns.reduce(apply, val)

export const zip = (l1=[], l2=[], fn=(...ab)=>ab, result=[]) =>
  (empty(l1) || empty(l2))
    ? result
    : zip(tail(l1), tail(l2), fn, [...result, fn(head(l1), head(l2))])

export const times = (count, d=null, result=[]) =>
  !count
    ? result
    : times(count - 1, d, [...result, d])
