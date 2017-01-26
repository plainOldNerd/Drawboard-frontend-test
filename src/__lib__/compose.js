import multiply from "./multiply"

var compose = (first, ...mxs) => {
  if (!mxs.length) return first
  var [next, ...rest] = mxs
  return compose(multiply(first, next), ...rest)
}

export default compose
